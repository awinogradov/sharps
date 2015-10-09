# Media queries

## Брейкпоинты
при body { font-size = 16px };
0 - 640 - 1024 - 1440 - 1920

Блок для настройки брейкпоинтов.

- `--small`         0 до 100%
- `--small-only`    0 до 640px;

- `--medium`        641px до 100%
- `--medium-only`   641px до 1024px

- `--large`         1025px до 100%
- `--large-only`    1025px до 1440px

- `--xlarge`        1441px до 100%
- `--xlarge-only`   1441px до 1920px

- `--xxlarge`       1920px до 100%
- `--xxlarge-only`  1920px до 100%

## Пример использования

```css
@media (--medium) {
    .page__content {
        width: 1000px;
    }
}

@media (--large) {
    .page__content {
        padding-left: 100px;
    }
}
```
