# Demo-Web-Shop-Automation-Testing-With-Cypress
This repository contains a Cypress-based test automation framework for the Demo Web Shop website. It utilizes the Page Object Model (POM) design pattern to ensure modularity and reusability.
### **Demo-Web-Shop-Automation-Testing-With-Cypress**  
![logo](https://github.com/user-attachments/assets/d2cc570d-8f4d-4516-92ba-03b592933718)


#### **📌 Introduction**  
This project is an **automation testing framework** for the **Demo Web Shop** using **Cypress**. It follows the **Page Object Model (POM)** design pattern to ensure **modularity, reusability, and maintainability** of test scripts. The framework validates core functionalities such as **user authentication, search, cart management, and checkout processes**, ensuring a smooth user experience.  

---

**Overview:**  
A Cypress-based automation testing framework designed for the Demo Web Shop. This project ensures seamless user experiences by validating key functionalities such as navigation, product management, cart operations, and the checkout process, using the Page Object Model (POM) design pattern.  

**Features:**  
- Automated tests for navigation, search, cart, and checkout.  
- Modular POM-based structure for reusability.  
- Cross-browser and responsive testing support.  


## 🛠️ **Tools and Technologies Used**

![Cypress](https://img.shields.io/badge/Cypress-Testing-blue)  
![JavaScript](https://img.shields.io/badge/JavaScript-Language-yellow)  
![GitHub](https://img.shields.io/badge/GitHub-Version_Controlling-lightgrey)  
![POM](https://img.shields.io/badge/Page_Object_Model-Framework-lightblue)


---

## 📂 **Features Tested**
---
1. **User Authentication:**
   - Verified the **login** and **registration** functionality with valid credentials.
   - Tested **password recovery** to ensure proper functionality for account recovery.

2. **Search Functionality:**
   - Ensured that **search results** match expected results based on queries.
   - Validated search filters like category, price, and brand.

3. **Cart and Wishlist Management:**
   - Validated the ability to **add**, **remove**, and **update** products in both the **cart** and **wishlist**.
   - Verified that the **cart** retains items across user sessions.

4. **Checkout Process:**
   - Fully tested the **checkout workflow**, including applying coupon codes, entering shipping details, and processing payments.
   - Ensured that the **order confirmation page** is correctly displayed after completing the purchase.

5. **UI Testing and Responsiveness:**
   - Verified that the website adjusts and looks correctly on **desktop**, **tablet**, and **mobile** screens.
   - Ensured **UI elements** like buttons, forms, and navigation align properly across devices.

---

## 📄 **Artifacts Included**
---
This project includes various documentation and reports to ensure comprehensive coverage and traceability:

1. **Test Scripts:**
   - Modular **Cypress** test scripts following the **Page Object Model (POM)**, covering core features like login, search, cart management, and checkout.
   - Each test case is structured to ensure reusability and maintainability, making the tests scalable.

2. **RTM (Requirements Traceability Matrix):**
   - A detailed **RTM** report that links test cases to corresponding requirements, ensuring all functionalities are covered and traceable.
   - This artifact provides a clear mapping between user stories and test scenarios.

3. **Mindmap:**
   - A **mindmap** outlining the testing strategy, covering major areas of testing like functional, non-functional, UI, and API testing.

4. **Test Plan:**
   - A comprehensive **Test Plan** document detailing the scope, objectives, testing types, strategy, resource requirements, and timelines.
   - The plan outlines the testing approach for both manual and automated tests.

5. **BDD Scenarios:**
   - **Behavior Driven Development (BDD)** scenarios written in Gherkin format. These scenarios help define the application behavior from the user's perspective, ensuring clarity in testing requirements.

6. **Manual Test Cases for Non-Functional Testing:**
   - **Manual test cases** for **non-functional testing** covering performance, security, and usability tests.
   - These cases ensure the application can handle large user loads, is secure, and provides a good user experience.

7. **Bug Report:**
   - A detailed **bug report** listing all issues discovered during testing, including bug IDs, descriptions, severity, steps to reproduce, and status.

8. **Test Summary Report:**
   - A summary of test execution results, including the number of test cases passed, failed, skipped, and details on any major defects found.
   - The report includes high-level recommendations based on the testing outcomes.

9. **Presentation Report:**
   - A **presentation report** summarizing key findings, bug trends, test execution results, and suggestions for improvement. This report is aimed at stakeholders and developers to help them prioritize work.

---
---

## 🐞 **Key Bugs Identified**
| **Bug ID** | **Feature**             | **Description**                                   | **Severity** | **Status** |
|------------|-------------------------|-------------------------------------------------|--------------|------------|
| **BUG-001** | Wishlist Functionality  | Wishlist button missing for certain products.   | High         | Open       |
| **BUG-002** | Checkout Process        | Promo code field not visible on checkout page.  | Medium       | Open       |
| **BUG-003** | UI Responsiveness       | Layout issues on mobile devices.                | High         | Open       |

---

## ✨ **Highlights**
---
- **Page Object Model (POM)**: Used for organizing the test code in a way that makes it easier to maintain and scale over time.
- **Comprehensive Test Coverage:** Includes functional, non-functional, UI, and regression testing for all major workflows.
- **Cross-Device Testing:** Ensures that the application is responsive and functional across desktop, tablet, and mobile.
- **Bug Identification:** Key bugs were found and categorized, providing insights into areas for improvement.
- **Detailed Documentation:** The project includes essential documentation like the **Test Plan**, **Test Summary**, and **Bug Report** for transparency and traceability.

---

## 🌐 **Demo Web Shop URL**
[Demo Web Shop](https://demowebshop.tricentis.com/)

---

## 📝 **Conclusion**
---
This project successfully implemented **Cypress-based automation tests** for the **Demo Web Shop**. The tests cover key user functionalities and UI components, ensuring the website remains stable and user-friendly across various platforms. The use of **Page Object Model (POM)** made the test scripts modular, reducing code repetition and improving maintainability.

The identified bugs have been documented and shared with the development team to prioritize fixes. The comprehensive **RTM**, **Test Plan**, and other artifacts ensure that the testing process was thorough and transparent.

---

## 🚀 **Future Enhancements**
---
- Expanding test coverage to include additional non-functional tests (e.g., performance and security).
- Integrating test execution into a Continuous Integration (CI) pipeline for automatic testing with every code change.
- Adding more complex test cases to cover edge scenarios and multi-step workflows.
