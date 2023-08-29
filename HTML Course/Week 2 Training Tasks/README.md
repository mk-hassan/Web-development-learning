# Week 2 Summary

## Table tag `<table>`

- Previously used in the design of the web pages, the header, sider bar, and the footer were presented by a HTML table which made the page loading to be slow.
- Now, it's used only to present data in shape of tables.
- The table has 3 main parts:
  - `<thead>` table header 
  - `<tbody>` table body 
  - `<tfoot>` table footer \
the existace of the 3 parts explicitely determines where should every part on the correct area of the table.
- A table cotains rows and each row inside the table is created using `<tr>` tag which corresponds to **table row**.
- Each `<tr>` have many table data elements `<td>` related to a specific data for the corresponding column, so it we have 5  columns then each `<tr>` is supposed to have ***up to*** 5 `<td>` elements.
There is a pecial tag instead of `<td>` is `<th>` which corresponding to table header, and it is used to add some styling to the column name like making it to be bold.
- Also there is a tag called `<caption>` and it's used to add caption on the table.
- Make table styling using CSS and not using the attributes.
- To mix cells togeather make use of **colspan="number of cells to be joined"** to join cells on the same row and **rowspan="number of cells to be joined"** to join cells on the same col. **Remember to count the exact number of the remaining cells**
```html
<table>
  <caption> Trial </caption>
  <thead>
    <tr>
      <th> ID </th>
      <th> Name </th>
      <th> Grade </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> 1 </td>
      <td> Mahmoud </td>
      <td> 90 </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2"></td>
      <td> AVG. </td>
    </tr>
  </tfoot>
</table>
```

## Span tag `<span>`

- An inline element, used mainly for **isolating** part of a block element to apply specific styling to that portion without affecting the rest of content of the block element.
```html
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Dolorem ullam laborum magnam aliquid dolor fuga quas. 
    Temporibus nam, sapiente aut deserunt <span>error</span>
    doloremque voluptates sit debitis similique eos tempora veniam?
  </p>
```
```css
  span {
    color: red;
    font-weight: bold;
  }
```
so only the **error** word will became red and bold like this 
<span style="color: red; font-weight: bold;"> error </span> .

## Break line tag `<br>`

- Used to break the current line, and start from a new one.
- Can make the same effect using **CSS**, so avoid using it.

## Horizontal line `<hr>`

- Block element, can have styling.
- A horizontal line used to break sections from one another.

## Division `<div>`

- King of elements, used to make a division of the page or to group elements togeather that are realted to each other or can have the same styling.
- Container for other elements.
- You will see it used on so many places on the page.
- Don't put text inside `<div>`, it's not created for that, just use the `<p>` which is intended for text data. while `<div>` is just used to group elements togeather **(container for other elements)**.

## Semantic elements

- Added in HTML5
- Aim to replace the use of `<div>` as a general element for grouping elements, and make more meaningful tags.
- Examples:
  - Header of the page `<header>`
  - For navigation bar `<nav>` 
  - Section of the main area `<section>` can have other sections to divide the content into small parts, like div inside div.
  - For main content of the page `<main>`
  - For side bar `<aside>`
  - An article inside a section `<article>` like div inside div.
    It's not meaningful to have article inside another. but section inside section.
  - Footer of the page `<footer>`
  - For images with captions `<figure>`
    - `<img>`
    - `<figcaption>`
  - etc
  
  All the previous tags can be reaplaces with `<div>` but those tags are more meaningful. They also take the same attributes just like `<div>` element.
  
  For example: 
  ```html
  <figure>
    <img src='some_image' alt='alternative_text'>
    <figcaption> some_caption </figcaption>
  </figure>
  ```
  can be replaced with 
  ```html
  <div>
    <img src='some_image' alt='alternative_text'>
    <p> some_caption </p>
  </div>
  ```
  and
  ```html
              <div class="header"> some_content </div>

  <!-- 
    Can be replaced with the following code, which does the same
    effect but using more meaningful tags 
  -->
                    <header> some_content </header>
  ```
  
## Audio tag `<audio>`

- Block element, used for audio content.
- Has the following attributes :
  - controls : **Mandatory** exists to make the audio file to appear on the page
  - autoplay
  - muted
  - loop
  - preload\
    has 3 options :
    - none
    - metadata
    - auto
  - src="path to the audio file"
- Has sub-tag called `<source src="path to file" type="MIME type (search the web)">`
and the audio tag may have many `<source>` elements with different audio file extention formats to guarantee the support of the browsers for some audio file extention. But when providing the `<source>` elements then don't provide the **src** attribure in the `<audio>` tag.
- Should have some sentance describing the audio file in case the browser doesn't support any file extension of the provided ones.

```html
<audio controls loop autoplay muted>
      <source src="../../Media/Sounds/file_example_MP3_1MG.mp3" type="audio/mpeg">
      <source src="../../Media/Sounds/file_example_OOG_2MG.ogg" type="audio/ogg">
      <source src="../../Media/Sounds/file_example_WAV_2MG.wav" type="audio/wav">
      The previous file formats are not supported by this browser
  </audio>
``` 
  ## Video tag `<video>`

- Block element, used for video content.
- Has the following attributes :
  - width
  - height
  - poster="path to images" : this image will be used while loading the video.
  - controls : **Mandatory** exists to make the audio file to appear on the page
  - autoplay
  - muted
  - loop
  - preload\
    has 3 options :
    - none
    - metadata
    - auto
  - src="path to the video file"
- Has sub-tag called `<source src="path to file" type="MIME type (search the web) ">`
- Has sub-tag called `<track src="path to .vtt translation file" kind="type of file" srclang="language" lable="name of the language">`, this tag exists for translation and to help the Disabled dea, blind and others.
and the video tag may have many `<source>` elements with different video file extention formats to guarantee the support of the browsers for some video file extention. But when providing the `<source>` elements then don't provide the **src** attribure in the `<video>` tag.
- Should have some sentance describing the video file in case the browser doesn't support any file extension of the provided ones.

```html
<video controls loop autoplay preload="auto" muted width="612" height="612" poster="../Media/Images/istockphoto-517188688-612x612.jpg">
    <source src="../../Media/Videos/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
    <source src="../../Media/Videos/SampleVideo_176x144_1mb.3gp" type="video/3gp">
    The supplied video extension are not supported by this browser
    <track src="en-subtitle.vtt" kind="subtitles" srclang="en" label="English">
    <track src="ge-subtitle.vtt" kind="subtitles" srclang="ge" label="German">
</video>
``` 

## HTML Entities

Special characters or constructs can't be written in usual way.
```html
<!-- How to print the <p> as is -->
<div> the <p> is meant for paragraphs </div>

<!-- 
  this previous syntax won't make the `<p>` to be printed as needed 
  so we need to use what is called semantic elements
-->

<div> the &lt;p&gt; is meant for paragraphs </div>

<!-- 
  &lt; and &gt; are called semantic elements that we can't write them explecitely
  other semantic elements are like the copy write sign and mathematical signs .
-->
```
