import {test, expect, type Page} from '@playwright/test'


 test(" TC__05 - Mock custom books", async ({ page }) => {
 
  await page.route(
    "**/BookStore/v1/Books",
    async route => {
   
      const data = {
        books: [
          {
            isbn: "111",
            title: "Saurabh Vishwakarma",
            subTitle: "QA_Engineer",
            author: "Saurabh",
          },
          {
            isbn: "222",
            title: "Stark Industries",
            subTitle: "Iron Man",
            author: "Tony Stark",
          },
        ],
      };
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify(data)
      });
 
    }
  );
 
  await page.goto("https://demoqa.com/books");
 
  await expect(
    page.getByText("Stark Industries")
  ).toBeVisible();
 
});

 test(" TC__06 - Mock with empty response and verify behaviour ", async ({ page }) => {
   await page.route("**/BookStore/v1/Books", async (route) => {
     await route.fulfill({
 
       contentType: "application/json",
       body: JSON.stringify({
         books: [

         ],
       }),
     });
   });

   await page.goto("https://demoqa.com/books");

   await expect(page.locator('.rt-tr-group')).toHaveCount(0)

   
 });

  test(" TC__07 - Delay API response and handle the loading state ", async ({
    page,
  }) => {
    await page.route("**/BookStore/v1/Books", async (route) => {
     await new Promise( resolve => setTimeout(resolve,3000))
        
    });

    await page.goto("https://demoqa.com/books");
  });




 