describe('Assessment', () => {
  it('ZenithBankAssessment', () => {
    //Launch ZenithBank URL
    cy.visit('/')
    cy.get('#continue-button').should('be.visible').click();
    //MainMenuIsVissble
    cy.get('#menu-main-menu-1 > .menu-item-1162 > [href="/personal-banking/"] > .menu-item-text')
      .should('be.visible')
      .trigger('mouseover')
      .wait(2000);
    //MenuItemsIsVissbleAndClicakable
    cy.xpath("//li[@class='menu-item-1530 menu-item menu-item-type-post_type menu-item-object-page cg-std-menu hoverimg']//a[normalize-space()='Bank Accounts']").should('exist')
    //CurrentAccount Sub Menu is seen and clickable
    cy.xpath("//li[contains(@class,'lvl3menu-item 1640')]//a[normalize-space()='Current Account']").click({force:true})
    //FeatureAndBenefits Heading is seen and clickable
    cy.xpath("//h4[@id='ui-id-1']//a[@id='#features-and-benefits']").should('be.visible').click()
    cy.wait(2000)
    //switch to validate each condition
    cy.get("div.cpb_content_element ul").then(($ul) => {
    // Validate each item in the requirements accordion
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
    //Requireents Heading is seen and clickable
    cy.xpath("//h4[@id='ui-id-3']//a[@id='#requirements']").should('be.visible').click()
    cy.wait(2000)
    cy.get("div.cpb_content_element ul").then(($ul) => {
    // Validate each item in the requirements accordion
      cy.wrap($ul)
      .find("li")
          .each(($li) => {
          const requirements = $li.text().trim();
           switch (requirements) {
          case "Account opening form duly completed":
             cy.wrap($li).should(
              "contain",
              "Account opening form duly completed"
            );
            break;
          case "One recent clear passport photograph of signatory":
             cy.wrap($li).should(
              "contain",
              "One recent clear passport photograph of signatory"
            );
            break;
          case "Identification of signatories (Driver’s License, International Passport, National Identity Card or Voter’s Card)":
             cy.wrap($li).should(
              "contain",
              "Identification of signatories (Driver’s License, International Passport, National Identity Card or Voter’s Card)"
            );
            break;
          case "Residence permit (where applicable)":
             cy.wrap($li).should(
              "contain",
              "Residence permit (where applicable)"
            );
            break;
          case "Two independent and satisfactory references":    
             cy.wrap($li).should(
              "contain", "Two independent and satisfactory references"
            );
            break;
          case "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)":
             cy.wrap($li).should(
              "contain",
              "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)"
            );
            break;
          default:
            break;
        }
      }); 
      //AvailableChannels Heading is seen and clickable
      cy.xpath("//h4[@id='ui-id-5']//a[@id='#available-channels']").should('be.visible').click()        
      cy.wait(2000)
      cy.get("div.cpb_content_element ul").then(($ul) => {
      // Validate each item in the Available Channels
        cy.wrap($ul)
        .find("li")
            .each(($li) => {
            const availableChannel = $li.text().trim(); 
             switch (availableChannel) {
            case "*966# EazyBanking":
               cy.wrap($li).should("contain", "*966# EazyBanking");
              break;
            case "Zenith Internet Banking":
            cy.wrap($li).should("contain", "Zenith Internet Banking");
              break;
            case "In-branch at any Zenith Bank branch":
            cy.wrap($li).should(
              "contain",
              "In-branch at any Zenith Bank branch"
            );
              break;
            case "ZenithDirect – our 24/7 telephone banking":
            cy.wrap($li).should(
              "contain",
              "ZenithDirect – our 24/7 telephone banking"
            );
            break;
            case "Zenith Bank ATM nation-wide – free cash withdrawal":
            cy.wrap($li).should(
              "contain",
              "Zenith Bank ATM nation-wide – free cash withdrawal"
            );
            break;
            case "Zenith Mobile Banking App – 24/7 on your smart phone":
            cy.wrap($li).should(
              "contain",
              "Zenith Mobile Banking App – 24/7 on your smart phone"
            );
            break;
            case "Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world":
            cy.wrap($li).should(
              "contain",
              "Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world"
            );
            break;
            default:
            break;
          }
       });
    })
  })
})
  })
})
