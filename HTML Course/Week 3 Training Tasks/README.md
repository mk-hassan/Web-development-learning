# Week 3 summary

## The form tag `<form>`

This `<form>` tag is the most used element of the html elements as it's intended to collect data from the website users.

- Has a few attributes like :
  - ***`action="some url"`*** which specifies the url to which the data is sent to be preocessed, it may be a url or a path to a file. If the action is empty or not provided the data will be sent to the same page and the page will be just reloaded .
  - ***`mathod="GET / POST / ... "`*** specifies the *HTTP* verb used to send the data. If the *GET* verb is used then the data filled on the form will appear explicitely on the URL query string also on the **Network** tab **Headers portion** and then on part of **query string parameters** when opening the **developer tools**. While using the *POST* verb will only allow the data to appear on the Network tab when opening it and not on the URL.
  - ***`novalidate`*** don't validate the input field against the constraints. Useful for testing .
  - ***`targrt="_blank"`*** not restart the page after submitting the form and clear the input fields, but just open a new tab .
  <br><br>


- Input tag `<input />` is used inside the `<form>` tag to provide input fields for different types of data. The type of the data is determinded using the type attribue.

  - ***`type`*** attribute has many values as follows :
    - text : used for ordinary text data.
    - password : used for passwords, it hides the password and replace it with dots.
    - email : used for email, it chesks the existance of "@" and email extensions.
    - submit : is a button with the word "submit" by default and when it's clicked the data is sent to the URI provided on the **action** attribure specified on the `<form>` tag.
    - reset : reset button, clears all the input fields to the default values .
    - hidden : hidden input field, that's used to provide data for internal usage and to appear or be modified by the user like your ID.
    This data inside hidden input will be sent without affecting your data.
    - color : choose some color input, it's doen programatically using JS.
    - range : takes other attribures like min="" max="" step="" value="start_value_number", also doen better programatically using JS .
    - number : just like range, but when you write numbers less than min or larger than max, and click submit then a warning popup message will appear. 
    - radio : radio buttons for different options and the user can choose only one choice. each radio button should have its value to be sent when submit the form, and every group of radio buttons must have the same name attribute so for example if we have 3 radio buttons grouped togeather using the same name="os" and each one have different value like "windows", "linux", "mac" so when we click submit on the form, there is part sent to the backend says that  `os=windows` if the user choosed windows.
    - checkbox : same as radio buttons but for multi-choice aspect.
    - file : button for uploading files.
    - search : for searching on sth, the extra this for usual text type is the existance of clear (x) button to clear the whole input once you clicked it.
    - url : enter just a valid url .
    - date : choosing date .
    - month : choosing months and years only without days .
    - Time : for time input .
    <br><br>

  - ***`required`*** attribute is used to force the user the enter some data on the input field. An popup error message will appear to the user if they press Submit without providing data on the required input field.

  - ***`readonly`*** is used to make the provided data not modified
  like your user name will be sent from the backend to the front end and appear to the user but the user isnot allowed to change or modify it.

  - ***`disabled`*** is used to make the provided data not to be sent to the backend when pressing the submit button. so both you can't modify or send the data.

  - ***`autofocus`*** used to focus on a pecific input field when the page in loaded. only the first input field with autofocus attribute will be focused on.

  - ***`placeholder=""`*** is used to provide some info about the input field like what data is expected to be entered on this field or instructions on how the data should be like.

  - ***`value=""`***  provides default value for the input field ex: changes the word written on buttons like `submit` can change it to `save`, provides default start value of the `range` tag .

  - ***`name=""`*** used to provide name for the data sent to the backend, so the backend can access the data item using its name.
  Should be provided for each input field to distinguish the different input fields from each other. The name attribure provides like an indicator for each data item sent from each input field to the server, and hence the server side can access the data using its name. 

  - The ***`minlenght="number"`*** and ***``maxlength="number"`*** used to specify the bounderies of the number of letters to be written on an input field.

  - ***`checked`*** used in case of radio and checkbox types.

- label tag `<label>` used for providing label for the input field. It has a very important attribute called **for="input field id"** which is linked to the input field using it's ID and it's useful if you want to focus on the input field by clicking on the label. the label tag usually used before the input tag but in case of radio buttons and checkboxs it used after them.


- select tag `<select>` used for selecting one or many options from multiple items. For allowing select multiple items add the ***multiple*** attribute to the tag. also add the `name="some name"` attribute. You can actually use radio buttons or checkboxes but for many options using `select` is much more reliable and readable. 
  - To add options use the `<option>` tag, and don't forget to add the `value="some value"` attribute to be sent when this option is selected. 
  - To make some option to be selected by default use the `selected` attribure.
  -  To group multiple options togeather use the `<optgroup>` tag with `label="some label"` to specify the name of the group.

- text area tag `<textarea>` attributes, is used as a place for entering long texts from the user used in cases like comment areas and others. There are 2 attributes rows="number" and cols="number" for resizing the text area but don't use them but do this using CSS .

- datalist `<input list="list name/ID" name="name to be sent to backend">`, we need then to provide the list options to select from and this is done using the `<datalist id="list name/ID">` and then write the options using the `<option value="">`. Take care that the **id** attribute value in the `<datalist>` tag is the same as the **list** attribute value in the `<input>` tag . The difference between the this type and `<select>` tag that this datalist is searchable and filter the options as you write more letters. 

## some useful tags

- `<q>` for writing qoutes (inline element), the data it surrounded by double qoutes.
- `<blockqoute>` for for writing qoutes (block element). <br>
Generally, qoutes are styled using css and there're frameworks that provide nice styling for qoutes.
- `<wbr>` word break oportunity, used to provide info about where possible to beak a long sentence if the size isnot feasible. same thing could be done using CSS .
- `bdi` be directional isolation, used to isolate differenct direction words from one another . ex: "السلام 2 wlconme" should be written as "<bdi>السلام</bdi> 2 welcome" to make "السلام" on the left as the direction of the page is ltr .
- `<code>` for computer code, and then do CSS styling on it.
- `<pre>` pre-formatted text, used to maintain the white spaces as is without ignoring them.
- `<iframe src="some ulr/web page">` used to host a web page inside your own web page. (not very common to do that).