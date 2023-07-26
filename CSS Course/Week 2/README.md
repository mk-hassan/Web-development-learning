# Week2 summary

## Grouping selectors
- grouping multiple selectors using ","
  ```css
  selector1,
  selector2,
  ... {
    property: value;
  }
  ```
- Nesting selectors
  ```css
  parent child {
    property: vlaue;
  }
  ```

## Sizing
- width 
  - pixels
  - percentage
  - fit-content
- min-width
- max-width
- height
  - pixels
  - percentage
  - fit-content
- min-height
- max-height
- overflow
  - visible : default
  - hidden
  - scroll
  - auto
- overflow-x: hidden
  - makes the horizontal content to disappear while scroll the vertical content
- overflow-y: hidden
  - makes the vertical content to disappear while scroll the horizontal content

## Text
- color
- text-shadow: Horizontal Vertical Blur Color 
- text-align: {right, left, center}
- direction: {rtl, ltr} 
  - determines the direction of the text content while the text-align property just puts the content as is to the rigth, left, or center of the container.
- vertical-align: {top, middle, bottom} 
  - if image is between words.
- text-decoration: {line-through, underline, overline, none}
- text-transform: {lowercase, uppercase, capatilize}
- letter-spacing: +ve, -ve values 
- text-indent: اضافة هوامش قبل الكلام
  - to hide the text you can use it with large -ve value
- line-height: التباعد العمودي بين الأسطر
  - best 1.6, 1,7
- word-spacing
- white-space: {normal, nowrap}
- word-break: {normal, break-word, break-all}
  - for only one word
  - break the word to not make overflow of the container
- text-overflow: elipses

