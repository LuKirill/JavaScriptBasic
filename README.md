dz2

1 - Стараемся не вылезать за пределы 80 символов в длину строки, к комментариям это тоже относится.
Можно и так объяснить. На самом деле оператор инкремента имеет больший приоритет, нежели операторы +, - и подобные. То есть ++ выполняется во всех примерах в первую очередь. Здесь весь вопрос в том, какое значение будет возвращено, при префиксной форме возвращено будет новое значение, которое получаем после увеличения. В постфиксной форме будет возвращено значение до увеличения. - done

2 - Идеально. Тут тоже не стоит выходить за пределы 80 символов :) - done

3 - Еще раз идеально. else последний не нужен, нам ничего не нужно делать :) Ну, ок, думаю просто поставили :) - done

4 - Функции здесь не возвращают ничего, выражение return console.log(... - означает что функция вернет то, что вернет console.log после того как выполнится, а он ничего не возвращает. Получится так, что все функции будут возвращать undefined. Нужно просто return num1 + num2;.
Больше не к чему придраться. - done

5 - Тут надо было пользоваться функциями, которые в предыдущем файле создавали. Надо было их скопировать и пользоваться в этой функции mathOperation по заданию. - done

6 - Логическое или - это ||, оператор | - бинарный оператор, не стоит его для логики использовать.
Возвращать нужно было только слова, не выражения, иначе функция будет только с данным выражением работать, ни с каким другим.
Требуется больше проверок... Не все варианты учтены. Например:
При вызове declinationOfNumber(21, "яблоко", "яблока", "яблок"); получаем значение "яблок", а должны были получить "яблоко".
При вызове declinationOfNumber(141, "яблоко", "яблока", "яблок"); получаем значение "яблок", а должны были получить "яблоко".
При вызове declinationOfNumber(23, "яблоко", "яблока", "яблок"); получаем значение "яблок", а должны были получить "яблока".
При вызове declinationOfNumber(123, "яблоко", "яблока", "яблок"); получаем значение "яблок", а должны были получить "яблока".
Загляните, если будет время в это задание, как минимум посмотрите решение, может где-то функция пригодится :) -done 
