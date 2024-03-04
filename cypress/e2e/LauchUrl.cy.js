describe('UrlLaunch', () => {
    //To Verify Url redirects to ZenithBank HomePage upon Url Launch
    it('Verify URL opens ZenithBank HomePage ', () => {
      cy.visit('/')
      cy.get('#continue-button').should('be.visible').click();
      cy.get('#menu-main-menu-1 > .menu-item-1162 > [href="/personal-banking/"] > .menu-item-text')
        .should('be.visible')
        .trigger('mouseover')
        .wait(2000);
      cy.xpath("//li[@class='menu-item-1530 menu-item menu-item-type-post_type menu-item-object-page cg-std-menu hoverimg']//a[normalize-space()='Bank Accounts']").should('exist')
      cy.xpath("//li[contains(@class,'lvl3menu-item 1640')]//a[normalize-space()='Current Account']").click({force:true})
      cy.xpath("//h4[@id='ui-id-1']//a[@id='#features-and-benefits']").should('be.visible').click()
      cy.wait(5000)
      //switch to validate each codition
      cy.get("div.cpb_content_element ul").then(($ul) => {
        cy.wrap($ul)
        .find("li")
            .each(($li) => {
            const featuresItem = $li.text().trim();
             switch (featuresItem) {
            case "Zero account opening balance":
              cy.wrap($li).should("contain", "Zero account opening balance");
              break;
            case "Internet Banking":
              cy.wrap($li).should("contain", "Internet Banking");
              break;
            case "Zenith Mobile Banking app":
                cy.wrap($li).should("contain", "Zenith Mobile Banking app");
                break;
            case "*966# Eazybanking":
                cy.wrap($li).should("contain", "*966# Eazybanking");
                break;
            case "MasterCard/Visa/Verve debit card":
                cy.wrap($li).should("contain", "MasterCard/Visa/Verve debit card");
                break;ng
            case "Email/SMS Alertz":
                cy.wrap($li).should("contain", "Email/SMS Alertz");
                break;ng
            case "Cheque book":
                cy.wrap($li).should("contain", "Cheque book");
                break;ng

          }
       });
      cy.xpath("//h4[@id='ui-id-3']//a[@id='#requirements']").should('be.visible').click()
      cy.get("div.cpb_content_element ul").then(($ul) => {
        cy.wrap($ul)
        .find("li")
            .each(($li) => {
            const requirement = $li.text().trim();
             switch (requirement) {
            case "Account opening form duly completed":
              cy.wrap($li).should("contain", "Account opening form duly completed");
              break;
            case "One recent clear passport photograph of signatory":
              cy.wrap($li).should("contain", "One recent clear passport photograph of signatory");
              break;

              case "Identification of signatories (Driver's License, International Passport, National Identity Card, Voter's Card)":
              cy.wrap($li).should("match", /Identification of signatories \(Driver's License, International Passport, National Identity Card or Voter's Card\)/);
              break;


            // case "Identification of signatories (Driver’s License, International Passport, National Identity Card, Voter’s Card)":
            //   cy.wrap($li).should("contain", "Identification of signatories (Driver’s License, International Passport, National Identity Card or Voter’s Card)");
            //   break;
              
            // case "Identification of signatories (Driver\’s License, International Passport, National Identity Card, Voter\’s Card)":
            //   cy.wrap($li).should("contain", "Identification of signatories (Driver\’s License, International Passport, National Identity Card or Voter\’s Card)");
            //   break;
            // case "Residence permit (where applicable)":
            //   cy.wrap($li).should("contain", "Residence permit (where applicable)");
            //   break;ng
            // case "Two independent and satisfactory references":
            //     cy.wrap($li).should("contain", "Two independent and satisfactory references");
            //   break;ng
            // case "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)":
            //     cy.wrap($li).should("contain", "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent\nreceipt, telephone bill)");
            //   break;ng             
            

          }
       });
    })
})
})
    })






    