# Week1 Summary

## Lesson1 (Introduction and What I Need To Learn ?)
- CSS is a short for Cascading style sheet.
- CSS has 3 versions and we will study them all during the lessons.
- Always ask and search about the aspects and attributes of the CSS.
- Start using modern content like (flex boxes) and use old ones like (float) less.

## Lesson2 (Your First Project And Syntax)
- Large projects have many CSS files and you must organize them on a seperate folder called `(css)` and the files inside it have no limits or rules on the file names, so you can call it any thing subtle for you `any_name.css`.
- CSS Code structure:
  ```css
    /* 
    - Selector: is the selected elemet 
      on which the following styling will be applied.
    - Property: is a property name of the CSS properties.
    - value: the value of the property (can have one or more values).
    - ; : used to seperate different properties.
    */
    Selector {  
      property: value;
    }
  ```
  The selector could be any HTML element name, class, or ID. 
- Not a best practice to use ID selector in CSS styling.

## Element styling
- There are 3 ways to write css code:
  1. External style : using a separate `.css` file to style your page
  ```html
    <link rel="stylesheet" href="path to file">
  ```
  2. Internal style : using `<style>` tag and write css code inside the page.
  3. Inline style: using attruibute `style="some css code"` inside the element you want to style.
  ```html
    <p style="color: red;"> some content </p>
  ```

- Not a best practice to use inline styling.
- Inline style > Internal style > External style.
- The css code is parsed line by line so if you style the p elements to have red color and in another decleration to have green color then the green color will be applied.

## Lesson4 (Name Conventions And Rules)

- class and id attributes are called identifiers, the names by which you identify a specific element.
- The identifier values naming rules: 
  - mustn't start with a number, but the number can be on the middle or end of the identifier value (name).
  - can start with underscore _ or hyphen - .
  - use meaningful names and not use special characters.

- The identifier values naming conventions: 
  - There are many conventions (camel case, snake case, ...)
  - The `best practice` is to use hyphen (-) to separate words.
- It's normal to have multiple styling for the same page and `programatically` you apply the subtle style when needed (overriding styling when needed).

## Lessons 5, 6, 7, 8

- background-color: 
  - color directly
  - rgb(red, green, blue) or rgb(red green blue)
  - rgba(red, green, blue, alpha channel) or rgb(red green blue / alpha channel)
  - hexcode
- background-image: url("path to image");
- background-repeat:
  - repeat
  - no-repeat
  - repeat-x
  - repeat-y
- background-attachment:
  - fixed
  - scroll
- background-position-x: 
  - (left, right, center)
  - pixels
  - percentage
- background-position-y: 
  - (top, bottom, center)
  - pixels
  - percentage
- background-position: 
  - (left, right, center) (top, bottom, center)
  - pixels
  - percentage
- background-size:
  - cover
  - contain
  - pixels
  - percentage
- padding 
  - compound property
  - pixels
  - percentage
  - no negative numbers
- margin
  - compound property
  - pixels
  - percentage
  - negative numbers allowed
  - auto is used to make the margin occupy the rest of the width of the page and splitted evennly from the right and the left so for example if the width of element 500px and the width of the page is 900px and the margin-left is assigned to auto then the left and right margin size will be 200px.
  - the top and bottom margins are a little bit tricky and not obey the auto value.
- border
  - compound porperty : width style color
- border-width
- border-color
- border-style : mandatory for the border show
- border customization using :
  - border-{top, right, bottom, left}-{color, width, style}
- outline : don't use it, similar to border but you can't customize directions and it's not related to the element itself like border. when using border reduis it won't be changed as it's not part of the element but the element itself will change.
- displat: {block, inline, inline-block, none}
  ```css
  /*

    Block

    - Take Full Width If No Width
    - Add Line Break
    - Respect Padding, Margin, Width, Height

    Inline

    - Do Not Repsepct Width, Height
    - Respect Padding And Margin [ Just Wight + Left ]
    - Do Not Add Line Break

    Inline-Block

    - Do Not Add Line Break
    - Respect Padding, Margin, Width, Height

    none

    - controls the visability of the element 
    - removes the element completely from the workflow and the following elments will take its place on the page.
  */
  ```

- visiablity: {visible, hidden}
  - default is visible
  - hidden makes the element to disappear but its place is reserved and not taken by any other element. <span style="color: red">NOT LIKE</span> `display: none`. It makes the page more reliable and not making the elements to jump around.




