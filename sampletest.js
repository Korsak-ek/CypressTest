describe('test_name', function() {

    it('what_it_does', function() {
   
       cy.viewport(1366, 657)
    
       cy.visit('https://westa.by/')
    
       cy.get('.menu > .menu__item:nth-child(4) > .submenu > .submenu__item:nth-child(1) > .submenu__lnk').click()
    
       cy.visit('https://westa.by/price/sanatorium/')
    
       cy.get('.nav > .menu > .menu__item:nth-child(5) > .menu__lnk-wrp > .menu__lnk').click()
    
       cy.visit('https://westa.by/contacts/')
    
       cy.get('.other-content > #tab0 > .js-accordion-wrp:nth-child(1) > .js-accordion > .js-accordion__ttl').click()
    
       cy.get('#header > .header__bottom > .main__container > .logo > img').click()
    
       cy.visit('https://westa.by/')
    
       cy.get('.slick-track > .services-slider__item:nth-child(11) > a > .services-slider__ico > img').click()
    
       cy.visit('https://westa.by/directions/restaurants/')
    
       cy.get('.slick-track > .carousel__col > #bx_3218110189_1660 > .carousel__info > .carousel__ttl').click()
    
       cy.visit('https://westa.by/about/promo/restaurants/kafe-pivo-gril-na-sadovoy-20-eto-ne-prosto-zagorodnoe-kafe/')
    
       cy.get('#header > .header__bottom > .main__container > .logo > img').click()
    
       cy.visit('https://westa.by/')
    
    })
   
   })
   