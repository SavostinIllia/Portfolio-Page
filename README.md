# Szablon Bazowy WP

Bazowy szablon do tworzenia stron na WP oparty o Foundation

## Instalacja

Instalujemy wordpress na serwerze lokalnym

Po sklonowaniu repozytorium uruchamiamy
```shell
npm install
```
W pliku `gulpfile.js` ustawiamy zmienną `localhost_path` na adres lokalnej instalacji WP

Aby rozpocząć pracę nad szablonem uruchamiamy komendę
```shell
gulp dev
```
W konsoli wyświetli się adres serwera, po wejściu i dokonaniu zmian w plikach przeglądarka odświeży się automatycznie

W pliku `src/style.css` zmieniamy informacje o szablonie.
W pliku `src/functions.php` zmieniamy `THEME_NS`.

Można zrobić symlink do plików z repo
```shell
cd path/to/local/wp/wp-content/themes
ln -s path/to/repo /dist
```
W wordpressie aktywujemy szablon. W zakładce _Wtyczki / Install Plugins_ instalujemy zalecane wtyczki.

## Przygotowane funkcje

### Tłumaczenie
W szablonie dostępne są funkcje `a__()` oraz `a_e()`, odpowiedniki `__()` oraz `_e()` które wyświetlają przetłumaczony tekst jednocześnie zapisując go do bazy tłumaczeń polylang.

### Opcje ACF
Szablon dodaje stronę opcji ACF automatycznie dla każdego języka (jeśli mamy polylang) lub jedną globalną. Wartości można uzyskać poprzez funkcję `get_translated_option('field_name')`, która zwraca wartość `get_field('field_name')` automatycznie dla aktualnego języka.

Istnieje możliwość dodania także stron opcje dla innych zakładek w WP przy użyciu funkcji `add_acf_submenu_options()`. Przykładowo aby dodać opcje do zakładki _Wpisy_ w WP możemy użyć
```php
add_acf_submenu_options('acf-post-options', 'Opcje wpisów', 'post.php')
```
Szablon doda podstronę opcji analogicznie jak wyżej, dla każdego języka.

Wartości można uzyskać podobnie jak wyżej dodając do funkcji parametr z nazwą strony opcji: `get_translated_option('field_name', 'acf-post-options')`.

### Ładowanie nowych postów AJAXem
W szablonie dostępne jest ładowanie nowych postów przy użyciu AJAX. Przykład znajduje się w `src/home.php`.

### Debugowanie
Po dokonaniu w `wp-config.php` zmiany:
```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_DEBUG_LOG', true );
```
można używać dostępnej w szablonie funkcji `write_log($thing)` która zapisuje do pliku `wp-content/debug.log`


## Biblioteki
Szablon używa następujących bibliotek:
- slick-carousel
- fancybox - z dodanym wsparciem dla natywnych galerii WP
- lazysizes - z dodanym wsparciem do obrazków dodawanych w WP

### Dodawanie nowych bibliotek

Po zainstalowaniu bibliotek przez `npm install package_name` możemy dodać wymagane pliki .js do `JSlibs` w `gulpfile.js` - zostaną one dodane do `dist/libs.js`, który jest załadowany przez WP

Jeśli biblioteka wymaga plików css, dodajemy odpowiednią ścieżkę do `pluginsToCopy` w `gulpfile.js`.
Później w pliku `src/functions/scripts.php` dodajemy style przy użyciu `wp_enqueue_style`

## Wgrywanie

### Commit
Po zakończeniu pracy uruchamiamy 
```shell
gulp prod
```
Szablon można wgrać na GitLab.

### FTP
Aby skonfigurować GitLaba, żeby po commicie automatycznie przegrywał szablon na serwer FTP należy dodać w _Settings > CI / CD_ zmienne:
```shell
$FTP_USER
$FTP_PASS
$FTP_HOST
$FTP_DIR
```
Zmienna `$FTP_DIR` to ścieżka katalogu `wp-content/themes/theme-folder` na FTP

Następnie w _Project Overview > Details > Set up CI/CD_ wpisujemy

```shell
image: mwienk/docker-lftp:latest

upload-ftp-roboczy:
  script:
    # upload ./dist to FTP_DIR on FTP_USER:FTP_PASS @ FTP_HOST
    - lftp -c "set ftp:ssl-allow no; open -u $FTP_USER,$FTP_PASS $FTP_HOST; mirror -Rev dist/ $FTP_DIR  --ignore-time --parallel=10 --exclude-glob .git* --exclude .git/"
```
