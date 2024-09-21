In WordPress, you can add HTML and CSS in several ways depending on where and how you want to customize your site. Here are some common methods:

![image](https://github.com/user-attachments/assets/38d3cbb7-a241-4210-9bc3-fb9951dcd56a)
![image](https://github.com/user-attachments/assets/96223e32-f23a-4ece-90cb-f8c2b9cc29ed)

![image](https://github.com/user-attachments/assets/b6c1d32a-0d4c-40e2-8b40-4a62464be09f)
![image](https://github.com/user-attachments/assets/6007d501-35ab-41f0-b89c-555d86d29300)


https://www.youtube.com/watch?v=cNLcaCQP3mI



### 1. **Using the Block Editor (Gutenberg)**
   - **Add HTML:**
     - Open the page or post you want to edit.
     - Click on the “+” button to add a new block.
     - Search for the “Custom HTML” block and select it.
     - You can now directly add HTML code into this block.
   
   - **Add CSS:**
     - You can add inline CSS inside the `<style>` tags in the HTML block.
     ```html
     <style>
         .custom-class {
             color: red;
         }
     </style>
     <div class="custom-class">This is styled text</div>
     ```

### 2. **Using the Theme Customizer**
   - Go to **Appearance > Customize** in your WordPress dashboard.
   - Select **Additional CSS** from the sidebar.
   - Add your custom CSS code in the field.
   ```css
   .custom-class {
       background-color: #f0f0f0;
       padding: 20px;
   }
   ```
   - This CSS will apply globally across the website.

### 3. **Editing the Theme Files Directly (Advanced)**
   - **For HTML:**
     - Go to **Appearance > Theme File Editor**.
     - Choose the file you want to edit (e.g., `header.php`, `footer.php`, `single.php`).
     - You can directly add or modify HTML in these files, but be careful, as this can break the site if not done correctly.

   - **For CSS:**
     - You can either edit the theme’s `style.css` file or enqueue your own custom CSS file.
     - In the theme editor, select `style.css` and add your custom CSS.

### 4. **Using a Child Theme**
   - Create a child theme to avoid losing changes when the main theme updates.
   - Add HTML to your child theme's template files (e.g., `header.php`, `footer.php`).
   - Add CSS to your child theme’s `style.css`.

### 5. **Using a Page Builder Plugin**
   If you're using a plugin like Elementor or WPBakery, they provide custom HTML blocks or sections where you can add both HTML and inline CSS.

Would you like to try a specific method?
