 $(function(){
   new WOW().init();
    khoimonan = $('.nhieumon').isotope({
        // options
        itemSelector: '.motmon',
        layoutMode: 'masonry'
      });
      khoimonan.imagesLoaded().progress( function() {
        khoimonan.isotope('layout');
      });
      $('.tieudect a').click( function(){
          dulieu =$(this).data('monan');
          khoimonan.isotope({ filter: dulieu });
          return false;
        });
     

        //xu li responsive bang jquery
        //tich ra so div ten .motmon
        // soluongmon = $('.motmon').length;
        
        // docao = soluongmon * $('.motmon').height();
        // console.log(docao);
        // $('.noidungct').css({'height':docao})

})  
 