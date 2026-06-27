# 🛠️ Shopify Admin Editor Master Checklist — Horizon Theme

This checklist is designed for store administrators and editors to configure, verify, and polish the **Horizon Theme** settings in the Shopify Admin. It merges the **current designed global values** with **section-based settings** to serve as a complete guide.

> Theme: **Horizon v4.1.0** | File: `config/settings_data.json`  
> Current Palette: Background `#f9f2d5` · Foreground `#1a0a00` · Primary `#8c1638`

---

## 📌 Part 1: Overall Global Settings (Theme Settings)
*Configure these settings under **Theme Settings** in the Shopify Theme Editor to apply styles and configurations globally.*

### 🖼️ 1. Logo & Favicon
- [ ] Default Logo (`logo`) — *not set*
- [ ] Inverse Logo (`logo_inverse`) — *not set*
- [x] Desktop Logo Height (`logo_height`) — **36px**
- [x] Mobile Logo Height (`logo_height_mobile`) — **28px**
- [ ] Favicon (`favicon`) — *not set*

### 🎨 2. Colors
- [x] Color Palette (`color_palette`) — bg: `#f9f2d5` · fg: `#1a0a00`
- [x] Primary Color (`color_primary`) — `#8c1638`
- [x] Secondary Text Color (`color_secondary_text`) — `#ffffff`
- **Card Colors**
  - [x] Card Background (`color_card_bg`) — `#ffffff`
  - [x] Card Border (`color_card_border`) — `#8c1638`
  - [x] Card Image Background (`color_card_image_bg`) — `#f9f9f9`

### 🔤 3. Typography
- **Text Color**
  - [x] Page Text Color (`page_text_color`) — `#1a0a00`
- **Font Families**
  - [x] Body Font (`type_body_font`) — **Inter Regular (inter_n4)**
  - [x] Subheading Font (`type_subheading_font`) — **Inter Medium (inter_n5)**
  - [x] Heading Font (`type_heading_font`) — **Inter Bold (inter_n7)**
  - [x] Accent Font (`type_accent_font`) — **Inter Bold (inter_n7)**
- **Heading Sizes & Line Heights**
  - [x] Paragraph Size (`type_size_paragraph`) — **14px** · Line Height: **Loose**
  - [x] H1: Font: Heading · Size: **56px** · Line Height: **Tight** · Letter Spacing: Normal · Text Case: None
  - [x] H2: Font: Heading · Size: **48px** · Line Height: **Tight** · Letter Spacing: Normal · Text Case: None
  - [x] H3: Font: Heading · Size: **32px** · Line Height: Normal · Letter Spacing: Normal · Text Case: None
  - [x] H4: Font: Heading · Size: **24px** · Line Height: **Tight** · Letter Spacing/Case: _not set_
  - [x] H5: Font: Subheading · Size: **14px** · Line Height: **Loose** · Letter Spacing/Case: _not set_
  - [x] H6: Font: Subheading · Size: **12px** · Line Height: **Loose** · Letter Spacing/Case: _not set_
- **Theme Font Size Scale**
  - [x] Small (`font_size_small`) — **11px**
  - [x] Body Small (`font_size_body_small`) — **13px**
  - [x] Body (`font_size_body`) — **15px**
  - [x] Heading Medium (`font_size_heading_medium`) — **18px**
  - [x] Heading Large (`font_size_heading_large`) — **24px**

### 📐 4. Page Layout & Spacing
- [x] Page Background Color (`page_background_color`) — `#f9f2d5`
- [x] Page Width (`page_width`) — **Narrow**
- [x] Custom Page Width (`custom_page_width`) — **1400px**
- [x] Section Spacing (`spacing_sections`) — **0px**
- **Border Radii**
  - [x] Card Border Radius (`radius_card`) — **12px**
  - [x] Large Border Radius (`radius_large`) — **20px**
  - [x] Button Border Radius (`radius_button`) — **50px**
- **Slideshow Controls**
  - [x] Enable Slideshow on Homepage (`slideshow_enabled_homepage`) — **true**
  - [x] Enable Gallery Auto-Slide on Products (`slideshow_enabled_products`) — **true**
  - [x] Enable on Collection Cards (`slideshow_enabled_collections`) — **true**
  - [x] Slideshow Interval (`slideshow_interval`) — **5s**
- **Grid Layout**
  - [ ] Products per Row / Desktop (`products_per_row`) — _not set_
  - [ ] Collections per Row / Desktop (`collections_per_row`) — _not set_

### ✨ 5. Animations
- [x] Page Transition (`page_transition_enabled`) — **true**
- [x] Transition to Main Product (`transition_to_main_product`) — **true**
- [ ] Add to Cart Animation (`add_to_cart_animation`) — _not set_
- [x] Scroll Reveal (`enable_scroll_reveal`) — **true**
- [x] Scroll Reveal Distance (`scroll_reveal_distance`) — **60px** ⚠️ *high (default: 20px)*
- [x] Scroll Reveal Duration (`scroll_reveal_duration`) — **1.0s** ⚠️ *slow (default: 0.4s)*
- [x] Hover Effect (`hover_effect`) — **3D lift**

### 🏷️ 6. Badges
- [x] Badge Position (`badge_position`) — **Top Left**
- [x] Badge Corner Radius (`badge_corner_radius`) — **100px** (fully round)
- **Badge Typography**
  - [ ] Font Family (`badge_font_family`) — _not set_
  - [x] Text Case (`badge_text_transform`) — **None**
- **Badge Colors**
  - [x] Sale Background (`badge_sale_background_color`) — `#8C1638` · Text: `#ffffff`
  - [x] Sold Out Background (`badge_sold_out_background_color`) — `#f9f2d5` · Text: `#1a0a00`
  - [x] New Background (`badge_new_background_color`) — `#1a0a00` · Text: `#ffffff`

### 🔘 7. Buttons & Inputs
- **Primary Button**
  - [x] Background (`palette_primary_button_background`) — `#8c1638`
  - [x] Text (`palette_primary_button_text`) — `#ffffff`
  - [x] Border (`palette_primary_button_border`) — `#8c1638` · Width: **0px**
  - [x] Border Radius (`button_border_radius_primary`) — **14px**
  - [ ] Font/Text Case — _not set_
- **Secondary Button**
  - [x] Background (`palette_secondary_button_background`) — `rgba(0,0,0,0)` (transparent)
  - [x] Text (`palette_secondary_button_text`) — `#8c1638`
  - [x] Border (`palette_secondary_button_border`) — `#8c1638` · Width: **1px**
  - [x] Border Radius (`button_border_radius_secondary`) — **14px**
  - [ ] Font/Text Case — _not set_
- **Inputs & Fields**
  - [x] Background (`palette_input_background`) — `#f9f2d5`
  - [x] Text (`palette_input_text`) — `#1a0a00`
  - [x] Border (`palette_input_border`) — `#8c1638` · Width: **1px**
  - [x] Border Radius (`inputs_border_radius`) — **4px**

### 🛒 8. Cart Settings
- [x] Cart Type (`cart_type`) — **Drawer**
- [x] Price Font (`cart_price_font`) — **Subheading**
- [x] Show Cart Note (`show_cart_note`) — **false**
- [x] Show Discount Code Field (`show_add_discount_code`) — **true**
- **Cart Thumbnail**
  - [x] Border Style (`cart_thumbnail_border`) — **Solid** · Width: **2px** · Opacity: **50%** · Radius: **10px**
- [ ] Auto-Open Drawer / Accent checkout buttons — _not set_

### 🗂️ 9. Drawers, Modals & Popovers
- **Drawers**
  - [x] Background Color (`drawer_background_color`) — `#f9f2d5`
  - [x] Text Color (`drawer_text_color`) — `#1a0a00`
  - [x] Border Color (`drawer_border_color`) — `#8c1638`
- **Popovers & Modals**
  - [x] Background Color (`popover_background_color`) — `#f9f2d5` · Text: `#1a0a00`
  - [x] Border Color (`popover_border_color`) — `#8c1638` · Width: **1px** · Radius: **14px**

### 📄 10. Pagination & Infinite Scroll
- [x] Pagination Type (`pagination_type`) — **Standard Pagination (pagination)**
- [x] Products per page (`products_per_page`) — **16**

### 💰 11. Prices, Cards & Swatches
- **Prices (Show Currency Code)**
  - [x] Product Pages (`currency_code_enabled_product_pages`) — **false**
  - [x] Product Cards (`currency_code_enabled_product_cards`) — **false**
  - [x] Cart Items (`currency_code_enabled_cart_items`) — **false**
- **Product Cards**
  - [x] Quick Add Background (`quick_add_background`) — `#8c1638` · Text: `#ffffff`
  - [x] Card Corner Radius (`card_corner_radius`) — **4px**
  - [x] Product Corner Radius (`product_corner_radius`) — **0px**
- **Swatches & Variant Pickers**
  - [x] Show Variant Images (`show_variant_image`) — **false**
  - [x] Swatch Dimensions (`variant_swatch_width` / `height`) — **34px x 34px** · Radius: **32px**
  - [x] Default Variantpicker Background (`palette_variant_background`) — `#f9f2d5` · Text: `#1a0a00` · Border: `#8c1638`
  - [x] Selected Variantpicker Background (`palette_selected_variant_background`) — `#8c1638` · Text: `#ffffff` · Border: `#8c1638`
  - [x] Variant Button Border Width (`variant_button_border_width`) — **1px** · Radius: **14px** · Width: **Fill (equal-width)**

### 🏢 12. Brand & Social
- [x] Brand Headline (`brand_headline`) — _(empty)_
- [x] Brand Description (`brand_description`) — _(empty)_
- [ ] Brand Image / Footer Logo (`brand_image`) — _not set_
- [x] Brand Image Width (`brand_image_width`) — **100px**
- **Social Links** ⚠️ *Set to Shopify defaults — update before launch!*
  - [x] Facebook (`social_facebook_link`) — `https://facebook.com/shopify`
  - [x] Instagram (`social_instagram_link`) — `http://instagram.com/shopify`
  - [x] YouTube (`social_youtube_link`) — `https://www.youtube.com/shopify`
  - [x] TikTok (`social_tiktok_link`) — `https://tiktok.com/@shopify`
  - [x] X / Twitter (`social_twitter_link`) — `https://x.com/shopify`

---

## 🧩 Part 2: Section-Based Settings Checklist
*Configure these settings block-by-block in the Shopify Theme Editor for individual sections on your templates.*

### 📢 1. Announcement Bar (`header-announcements.liquid`)
- [ ] **Enable announcements**: Toggle visibility of top banner.
- [ ] **Messages**: Add custom slide text, links, and target URLs.
- [ ] **Autoplay**: Set slideshow timing for rotation of notices.

### ⚓ 2. Header (`header.liquid`)
- [ ] **Primary Menu**: Bind to main store navigation menu.
- [ ] **Sticky Behavior**: Set sticky style (None, Always, On Scroll Up).
- [ ] **Mega Menus**: Configure dropdown menus with featured collection/promotional blocks.

### 🎬 3. Slideshow / Hero (`slideshow.liquid` & `hero.liquid`)
- [ ] **Images**: Verify high-res desktop & mobile banners.
- [ ] **Text Contrast**: Adjust background overlays to keep text readable over custom images.
- [ ] **CTA Buttons**: Check links and custom styling (Primary vs Secondary button shapes).

### 📦 4. Product Page (`main-product.liquid`)
- [ ] **Gallery Layout**: Test Grid/Carousel layouts on mobile and desktop viewports.
- [ ] **Information Blocks**: Organize the titles, prices, description, buy buttons, and variant swatches.
- [ ] **Collapsible Tabs**: Add product details, shipping guides, or sizing charts.

### 🛍5. Collections (`main-collection.liquid`)
- [ ] **Layout Grid**: Set products/collections per row.
- [ ] **Filters**: Turn on sidebar filtering options (by tag, color, size, price, etc.).

### 👣 6. Footer (`footer.liquid`)
- [ ] **Link Lists**: Set menus for policies, customer care, and general pages.
- [ ] **Brand Info**: Populate the bio, logo, and verified socials.
- [ ] **Newsletter & Language**: Turn on localized settings & payment gateways.
