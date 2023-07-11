        // document.write("JS Каже привіт!")
        // console.log("ghghg")
        // console.info("wjwjwww")
        // console.error("wdadawdawdaw")
        
        
        
        
        // Математические действия

        // // 1 варіант !
        // var num_1 = 10;
        // var num_2 = 5;

        // var res = num_1 + num_2;
        // console.log("Відповідь: " + res);
       
       
        // // 2 варіант !
        // var num_3 = 5;
        // num_3 += 10;
        // console.log("Відповідь: " + num_3);

        
        // // 3 вариант: строки переобразовывают в цифры/числа!
        // var str_1 = Number("12");
        // var str_2 = Number("2");

        // var res_1 = str_1 + str_2;
        // console.log("Відповідь: " + res_1);


        // // Math!
        // console.log("Math: " + Math.PI);
        // console.log("Math: " + Math.min(7, 2, 5, 9, 4, 1, 10));
        // console.log("Math: " + Math.max(7, 2, 5, 9, 4, 1, 10));



        //  Условные операторы!

        // true/false 


        // var num_1 = 15;
        // var isHasHouse = true;
        // // true
        // //  &&-и; ||-или.
        // if(num_1 < 15 && isHasHouse) {
        //         console.log("true");
        // }


        // // можно подставлять разновидность ответов!
        // else if(num_1 > 30){
        //      console.log("Вариант 1");   
        // }
        // else if(num_1 == 8){
        //         console.log("Вариант 2");  
        //    }
        // else if(num_1 > 10){
        //         console.log("Вариант 3");   
        // }


        // // false
        // else{
        //         console.log("false");
        // }



        // switch - case
        var stroka = "world";

        switch (stroka){
                case"4": 
                        console.log("переменая со значением 4");
                break;
                case"45": 
                        console.log("переменая со значением 45");
                break;
                case"world": 
                        console.log("переменая со значением world");
                break;
                default:
                        console.log("nah...");
                break;
        }