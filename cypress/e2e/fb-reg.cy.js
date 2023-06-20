describe('fb reg', () => {
    it('reg-positive', () => {

        cy.visit("https://id-id.facebook.com/")

        cy.get(".fb_logo").click()

        cy.get("[data-testid='open-registration-form-button']").click()

        cy.get("[aria-label='Nama depan']").type("FbTest")

        cy.get("[aria-label='Nama belakang']").type("Reg")

        cy.get("[name='reg_email__']").type("fb.regist01@gmail.com")

        cy.get("[name='reg_email_confirmation__']").type("fb.regist01@gmail.com")

        cy.get("[name='reg_passwd__']").type("FbTest123!")
        
        cy.get("#day").select("21")

        cy.get("#month").select("Jun")

        cy.get("#year").select("1999")

        cy.get("[type='radio']").check("2")

        cy.get("[name='websubmit']").click()

        cy.get(".x6s0dn4 > .x193iq5w > .x1lliihq").should("be.visible")

        let expName = "FbTest"

        cy.get(".x6s0dn4 > .x193iq5w > .x1lliihq").then( (x) =>{
            let actName = x.text()

            assert.equal(actName,expName)

            })
    })

    it('invalid-email-negative', () =>{

        cy.visit("https://id-id.facebook.com/")

        cy.get(".fb_logo").click()

        cy.get("[data-testid='open-registration-form-button']").click()

        cy.get("[aria-label='Nama depan']").type("FbTest")

        cy.get("[aria-label='Nama belakang']").type("Reg")

        cy.get("[name='reg_email__']").type("salah")

        cy.get("[name='reg_passwd__']").type("FbTest123!")
        
        cy.get("#day").select("21")

        cy.get("#month").select("Jun")

        cy.get("#year").select("1999")

        cy.get("[type='radio']").check("2")

        cy.get("[name='websubmit']").click()

        cy.get("._5v-0._53im").contains("Harap masukkan nomor telepon atau alamat email yang valid.").should("be.visible")

    })
})