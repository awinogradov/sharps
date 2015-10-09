# Media queries

## Брейкпоинты
body { font-size = 16px };
0 - 640 - 1024 - 1440 - 1920

Brackpoints

- `--small`         0 to 100%
- `--small-only`    0 to 640px;

- `--medium`        641px to 100%
- `--medium-only`   641px to 1024px

- `--large`         1025px to 100%
- `--large-only`    1025px to 1440px

- `--xlarge`        1441px to 100%
- `--xlarge-only`   1441px to 1920px

- `--xxlarge`       1920px to 100%
- `--xxlarge-only`  1920px to 100%

## Example use

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
