const { By, Builder, Key, until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const assert = require("assert");

suite(function(env) {
    describe('Vivense', function() {
        let driver;
        this.timeout(30000)
       
        before(async function() {
          driver = await new Builder().forBrowser('chrome').build()
       
       
        })
       

  
        it('Login', async function() {
            
            await driver.get('https://www.vivense.com/vivense-uye-girisi.html');   
            let title = await driver.getTitle();
            assert.equal("Giriş Yap - Vivense", title);
            driver.manage().window().maximize();
            
            let eMailBox = await driver.findElement(By.id('loginEmail'));
            let passBox = await driver.findElement(By.id('loginPassword'));
            let submitButton = await driver.findElement(By.className('btn btn-default user-register-button'));
      

            await eMailBox.sendKeys('ylmzhsn34@gmail.com');
            await passBox.sendKeys('123456Hh.');
            await submitButton.click();
            

        });


        it('Add product to cart', async function() {

             

         await driver.wait(until.elementLocated(By.css('div:nth-of-type(3) > .vvs-snippet-hero-products__items > div:nth-of-type(1) > .vvs-snippet-hero-products__cta > .img-responsive.lazy.vvs-snippet-hero-products__image')), 2000).click();
         await driver.wait(until.elementLocated(By.css('div:nth-of-type(2) > .product-link > .product-link  .product-name')), 2000).click();
         await driver.wait(until.elementLocated(By.className('add-to-cart-btn')), 2000).click();
         await driver.wait(until.elementLocated(By.className('proceed_2 btn cart-confirm btn-lg')), 2000).click();
         
          
           
            

        });

        it('add address', async function() {
            
            
             
             await driver.wait(until.elementLocated(By.className('add-new-address')), 3000).click();;
             await driver.wait(until.elementLocated(By.id('address-title')), 2000).sendKeys('Testt TITLE');       
             await driver.wait(until.elementLocated(By.className('form-control first_name_input_placeholder')), 2000).sendKeys('TestName');
             await driver.wait(until.elementLocated(By.className('form-control last_name_input_placeholder')),2000).sendKeys('tetLastName');
             await driver.wait(until.elementLocated(By.id('phone')),2000).sendKeys('458511612');
             await driver.wait(until.elementLocated(By.id('address-identification_no')),2000).sendKeys('19459311834');
             await driver.wait(until.elementLocated(By.id('email')),2000).sendKeys('ylmzhsn34@gmail.com');
             await driver.wait(until.elementLocated(By.id('city-list')),2000).click();
             await driver.wait(until.elementLocated(By.css("select#city-list > option[value='Ağrı']")),2000).click();
             await driver.wait(until.elementLocated(By.id('district')),2000).click();
             await driver.wait(until.elementLocated(By.css("[value='Taşlıçay']")),2000).click();     
            await driver.wait(until.elementLocated(By.id('adres-details')),2000).sendKeys('test adress adress testttt');
            await driver.wait(until.elementLocated(By.id('address_add_button')), 2000).click();;
            await driver.wait(until.elementLocated(By.css(".cart-header > .inln-block > .btn.btn-lg.cart-confirm")),2000).click()

        });

        it('payment', async function() {
            await driver.sleep(5000);
            await driver.wait(until.elementLocated(By.xpath('//*[@id="masterpass-accept-modal"]/div/div/div[2]/div/div/label')), 3000).click();        
            await driver.wait(until.elementLocated(By.id('paywithbank_span')), 2000).click();          
            await driver.wait(until.elementLocated(By.css('.js-accept-policy-checkboxes .fa-check')),2000).click();
            await driver.wait(until.elementLocated(By.id('btn1')), 2000).click();
            await driver.wait(until.elementLocated(By.css('.payment_type_final_text > .payment_type_title')),2000)
                .getText().then(textValue => {
                     assert.equal('SİPARİŞİN BAŞARIYLA TAMAMLANDI!', textValue);
      });
           
       });
   
})
})