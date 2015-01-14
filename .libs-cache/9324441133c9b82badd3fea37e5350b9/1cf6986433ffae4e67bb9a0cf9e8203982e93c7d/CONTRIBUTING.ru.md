## Рабочий процесс

Подробнее почитать об этом можно на GitHub [guides](http://guides.github.com/),
а также в статье на [хабре](http://habrahabr.ru/post/189046/).

### Как внести изменения

1. [Создайте новое issue](https://github.com/verybigman/bem-typo/issues/new) с описанием или возьмите существующее.
2. Создайте feature-branch с номером issue от master ветки. Например, для issue #42: `git checkout -b feature/issue@42`.
3. Зафиксируйте изменения и сделайте `push` вашей ветки.
4. Создайте pull-request.
5. Свяжите ваш pull-request с номером issue через коментарий.
6. Ждите пока ваш pull-request примут, а issue закроют.

_Для продуктивной работы с таким процессом вы можете использовать [git-extras](https://github.com/visionmedia/git-extras)
\- очень полезный инструмент для Git_
