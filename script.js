// функция, исполняемая после загрузки документа
jQuery(document).ready(function () {
    // объявляем переменные
    var period = 'month';
    var tarrif = 'arcade';
    var firstAddOn = false;
    var secondAddOn = false;
    var thirdAddOn = false;
    var addOnCost = '0';
    var totalCost = '0';

    //переход на 2 шаг
    $('.step-1-form-submit').on('click', function () { //слушатель нажатий кнопки next
        $('.step-content-1').css('display', 'none'); //задаём новое значение свойству класса
        $('.step-content-2').css('display', 'block');
        $('.sidebar-item-num-1').removeClass('sidebar-item-selected'); //удаляем класс у блока
        $('.sidebar-item-num-2').addClass('sidebar-item-selected'); //добавляем класс блоку
    });

    //возврат на 1 шаг
    $('.step-2-form-back').on('click', function () { //нажатие кнопки назад
        $('.step-content-1').css('display', 'block');//аналогично предыдущему
        $('.step-content-2').css('display', 'none');//аналогично предыдущему
        $('.sidebar-item-num-1').addClass('sidebar-item-selected');//аналогично предыдущему
        $('.sidebar-item-num-2').removeClass('sidebar-item-selected');//аналогично предыдущему
    });

    //выбор карточки с тарифом
    $('.card-1').on('click', function () { //тоже листенер
        $('.card-1').toggleClass('card-selected');//переключатель класса (добавляет, при повторном нажатии удаляет класс у блока)
        $('.card-2').removeClass('card-selected');
        $('.card-3').removeClass('card-selected');
        tarrif = 'arcade';
    });
    $('.card-2').on('click', function () {
        $('.card-2').toggleClass('card-selected');
        $('.card-1').removeClass('card-selected');
        $('.card-3').removeClass('card-selected');
        tarrif = 'advanced';
    });
    $('.card-3').on('click', function () {
        $('.card-3').toggleClass('card-selected');
        $('.card-2').removeClass('card-selected');
        $('.card-1').removeClass('card-selected');
        tarrif = 'pro';
    });

    // выбор периода месяц/год
    $('.tarrif-select').on('click', function () {
        $('.tarrif-select-switch').toggleClass('tarrif-select-switch-active');
        $('.tarrif-select-period').toggleClass('tarrif-active');
        if (period == 'month') { //условие если периодом является месяц
            period = 'year';
            $('.card-1-cost').html('$90/yr'); //записываем в разметку значение тарифа (обращаемся по классу)
            $('.card-2-cost').html('$120/yr');
            $('.card-3-cost').html('$150/yr');
            $('.card-cost-action').html('2 month free');
        }
        else {
            period = 'month' //если период год
            $('.card-1-cost').html('$9/mo');
            $('.card-2-cost').html('$12/mo');
            $('.card-3-cost').html('$15/mo');
            $('.card-cost-action').html('');
        }

    });

    //переход на 3 шаг
    $('.step-2-form-submit').on('click', function () { //нажатие кнопки next
        if (period == 'month') {
            $('.step-content-2').css('display', 'none');
            $('.step-content-3').css('display', 'block');
            $('.sidebar-item-num-2').removeClass('sidebar-item-selected');
            $('.sidebar-item-num-3').addClass('sidebar-item-selected');
        }
        else {
            $('.step-content-2').css('display', 'none');
            $('.step-content-3-year').css('display', 'block');
            $('.sidebar-item-num-2').removeClass('sidebar-item-selected');
            $('.sidebar-item-num-3').addClass('sidebar-item-selected');
        }

    });

    //выбор аддонов
    $('.addon-card-1').on('click', function () { //слушатель нажатия на карточки с аддонами
        $('.addon-card-1').toggleClass('addon-card-selected');
        $('.addon-checkbox-1').toggleClass('addon-checkbox-selected');//переключаем класс
        if (firstAddOn == false) { //проверяем, выбран ли уже этот аддон
            firstAddOn = true; //если нет, то делаем его выбранным, установкой флага
        }
        else {//если аддон выбран
            firstAddOn = false //делаем его не выбранным
        }
    });

    $('.addon-card-2').on('click', function () { // то же самое со второй карточкой
        $('.addon-card-2').toggleClass('addon-card-selected');
        $('.addon-checkbox-2').toggleClass('addon-checkbox-selected');
        if (secondAddOn == false) {
            secondAddOn = true;
        }
        else {
            secondAddOn = false
        }
    });

    $('.addon-card-3').on('click', function () {// то же самое с третьей карточкой
        $('.addon-card-3').toggleClass('addon-card-selected');
        $('.addon-checkbox-3').toggleClass('addon-checkbox-selected');
        if (thirdAddOn == false) {
            thirdAddOn = true;
        }
        else {
            thirdAddOn = false
        }
    });

    // переход на 4 шаг
    $('.step-3-form-submit').on('click', function () {
        $('.step-content-3').css('display', 'none');
        $('.step-content-3-year').css('display', 'none');
        $('.step-content-4').css('display', 'block');
        $('.sidebar-item-num-3').removeClass('sidebar-item-selected');
        $('.sidebar-item-num-4').addClass('sidebar-item-selected');

        //тут в зависимости от выбранного периода (месяц/год) мы выводим в 4 шаг сведения о выбранном тарифе
        //если выбран месяц
        if (period == 'month') {
            //тут в зависимости от выбранного тарифа выводим данные в разметку
            if (tarrif == 'arcade') {
                $('.tarrif-selected').html('Arcade (Monthly)');
                $('.tarrif-pattern-cost').html('9$/mo');
            }
            else if (tarrif == 'advanced') {
                $('.tarrif-selected').html('Advanced (Monthly)');
                $('.tarrif-pattern-cost').html('12$/mo');
            }
            else if (tarrif == 'pro') {
                $('.tarrif-selected').html('Pro (Monthly)');
                $('.tarrif-pattern-cost').html('15$/mo');
            }

            if (firstAddOn == true) {
                $('.submit-addon-1').removeClass('submit-addon-none');
            }
            else {
                $('.submit-addon-1').addClass('submit-addon-none');
            };
            if (secondAddOn == true) {
                $('.submit-addon-2').removeClass('submit-addon-none');
            }
            else {
                $('.submit-addon-2').addClass('submit-addon-none');
            };
            if (thirdAddOn == true) {
                $('.submit-addon-3').removeClass('submit-addon-none');
            }
            else {
                $('.submit-addon-3').addClass('submit-addon-none');
            };
        }

        //если выбран год
        else {
            if (tarrif == 'arcade') {
                $('.tarrif-selected').html('Arcade (Yearly)');
                $('.tarrif-pattern-cost').html('90$/yr');
            }
            else if (tarrif == 'advanced') {
                $('.tarrif-selected').html('Advanced (Yearly)');
                $('.tarrif-pattern-cost').html('120$/yr');
            }
            else if (tarrif == 'pro') {
                $('.tarrif-selected').html('Pro (Yearly)');
                $('.tarrif-pattern-cost').html('150$/yr');
            }

            if (firstAddOn == true) {
                $('.submit-addon-1-year').removeClass('submit-addon-none');
            }
            else {
                $('.submit-addon-1-year').addClass('submit-addon-none');
            };
            if (secondAddOn == true) {
                $('.submit-addon-2-year').removeClass('submit-addon-none');
            }
            else {
                $('.submit-addon-2-year').addClass('submit-addon-none');
            };
            if (thirdAddOn == true) {
                $('.submit-addon-3-year').removeClass('submit-addon-none');
            }
            else {
                $('.submit-addon-3-year').addClass('submit-addon-none');
            };
        }

        //расчёт итоговой стоимости
        if (period == 'month') {
            if (tarrif == 'arcade') {
                totalCost = '9';
            }
            else if (tarrif == 'advanced') {
                totalCost = '12';
            }
            else if (tarrif == 'pro') {
                totalCost = '15';
            }

            if (firstAddOn == true) {
                addOnCost = parseInt(addOnCost) + parseInt('1');
            }
            if (secondAddOn == true) {
                addOnCost = parseInt(addOnCost) + parseInt('2');
            }
            if (thirdAddOn == true) {
                addOnCost = parseInt(addOnCost) + parseInt('2');
            }
        }

        //если период год
        else {
            if (tarrif == 'arcade') {
                totalCost = '90';
            }
            else if (tarrif == 'advanced') {
                totalCost = '120';
            }
            else if (tarrif == 'pro') {
                totalCost = '150';
            }
            if (firstAddOn == true) {
                addOnCost = parseInt(addOnCost) + parseInt('10');
            }
            if (secondAddOn == true) {
                addOnCost = parseInt(addOnCost) + parseInt('20');
            }
            if (thirdAddOn == true) {
                addOnCost = parseInt(addOnCost) + parseInt('20');
            }
        }

        //тут парсим строковые значения (приводим к целочисленному типу) и вычисляем
        totalCost = parseInt(totalCost) + parseInt(addOnCost);
        $('.total-cost-text').html('Total (per ' + period + ')');

        //выводм постфикс у итоговой суммы в зависимости от периода
        if (period == 'month') {
            $('.total-cost-summ-post').html('/mo');
        }
        else {
            $('.total-cost-summ-post').html('/yr');
        }

        //итоговая стоимость
        $('.total-cost-summ').html(totalCost);

    });

    //вовзрат на 2 шаг
    $('.step-3-form-back').on('click', function () {
        $('.step-content-2').css('display', 'block');
        $('.step-content-3').css('display', 'none');
        $('.step-content-3-year').css('display', 'none');
        $('.sidebar-item-num-2').addClass('sidebar-item-selected');
        $('.sidebar-item-num-3').removeClass('sidebar-item-selected');

        $('.submit-addon-1').addClass('submit-addon-none');
        $('.submit-addon-2').addClass('submit-addon-none');
        $('.submit-addon-3').addClass('submit-addon-none');
        $('.submit-addon-1-year').addClass('submit-addon-none');
        $('.submit-addon-2-year').addClass('submit-addon-none');
        $('.submit-addon-3-year').addClass('submit-addon-none');
    });

    // переход на thanks
    $('.step-4-form-submit').on('click', function () {
        $('.step-content-4').css('display', 'none');
        $('.step-content-5').css('display', 'block');
    });

    //вовзрат на 3 шаг
    $('.step-4-form-back').on('click', function () {

        if (period == 'month') {
            $('.step-content-3').css('display', 'block');
        }
        else {
            $('.step-content-3-year').css('display', 'block');
        }
        $('.step-content-4').css('display', 'none');
        $('.sidebar-item-num-3').addClass('sidebar-item-selected');
        $('.sidebar-item-num-4').removeClass('sidebar-item-selected');
        addOnCost = '0';
    });

})


