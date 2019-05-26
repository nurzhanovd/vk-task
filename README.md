# vk task trello clone
Думаю, стоит написать как я делал это задание. Хочу уделить внимание двум вещам:

  - Drag'n'Drop
  - Структура Redux

# Drag'n'Drop
    Изначально, я хотел сделать собственный DnD с помощью HTML5 API. Представлял себе два компонента: Draggable, Droppable, и какой-то generic singleton для взаимодействия с Data Transfer, либо хранить данные в Redux.
    Но, как оказалось, HTML API неудобно контролировать(для меня, по крайней мере) и были некоторые недостатки:
        - DragImage не гибкий
        - Я делал движение элемента на событие onDrag, но в тогда onDragEnter работал у меня криво(Drag Image и мои элементы не совпадали по координатам)
        - Если вообще убрать DragImage, то события не будут срабатывать
        - Пробовал навешивать mousemove после mousedown - не увенчалось успехом
        - Решил запилить свой DnD Manager, но понял, что изобрету велосипед, а могу потратить время на другое, а времени у меня было меньше остальных, потому что я начал делать задание в вечер пятницы
    Я долго думал стоит ли подключать библиотеку, чтобы юзать D'n'D и в итоге подрубил ¯\_(ツ)_/¯
    
# Redux
    Было два варианта для хранения данных в Redux
    Сделать список column такого вида
    interface Column {
        id,
        title,
        cards: Card[]
    }
    
    interface Card {
        id,
        title
    }
    Но тогда было бы сложно менять state приложения из-за вложенности
    
    Я остановился на том, что у меня отдельно лежат колонки и карты в таком виде
    columns: { title, id }[]
    cards у меня типо HashList, где ключ - это columnId, а значение это {text, id}[]
    Такой вариант для меня показался удобным
    
    Также я думал париться ли по поводу порядка моих колонок и карточек, но понял, что когда будет меняться порядок карт, то в полноценном приложении будет отправляться запрос на сервер и это измениться там, при обновлении страниц порядок данных уже будет измененний
    
    
