
        const pageToScroll = document.querySelector('.btn-one');
        const line6 = document.querySelector('#line__8');

        pageToScroll.addEventListener('click', function(){
            pageToScroll.scrollIntoView({behavior:"smooth"});
        });


        const btnToScroll = document.querySelector('.btn-two');
        const line4 = document.querySelector('#line__six');

        btnToScroll.addEventListener('click', function(){
            btnToScroll.scrollIntoView({behavior:"smooth"});
        });



       
