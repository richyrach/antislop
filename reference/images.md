# Images

A page about a place, a product, a person or food looks unfinished without real pictures of it, and no amount of typography makes up for that. Getting them is part of the job. Try every step below before you settle for none.

## 1. Look for what already exists

- Search the project: `public/`, `assets/`, `static/`, `images/`, `media/`, design files, the README, old versions of the site.
- If the user named a business, a product page, a social account or an existing site, ask whether its photos may be used. Do not copy them without a yes.
- If the product is software and you can run it, take real screenshots of it showing real or clearly labelled sample data. A real screenshot beats any illustration of the product.

## 2. Ask once

Ask for the specific pictures the design needs, with sizes: "a wide photo of the shop front, three or four of the bread, one of the people who bake it." A specific request gets answered. "Any images?" does not.

## 3. Find openly licensed photographs

Only when the picture is of a general subject (a kind of bread, a city street, a tool, a landscape) and never when it would pass as this business's own product, premises, staff or customers.

Sources where the licence is stated per image:

- Wikimedia Commons
- Openverse
- Museum and agency open-access collections, such as The Met Open Access, the Rijksmuseum, Smithsonian Open Access and NASA's image library

For each image:

1. Read the licence on the image's own page. Public domain and CC0 need no credit. CC BY needs a credit. CC BY-SA needs a credit and affects how you may license your adaptation. Skip anything marked non-commercial or no-derivatives for a commercial site.
2. Download the file into the project. Never hotlink.
3. Credit it on the page where the licence requires it, with author, licence and source.
4. Record every image in a file such as `CREDITS.md`: filename, author, licence, source URL.

Stock libraries have their own terms, and some restrict automated selection or downloading. Read them before using one, and tell the user which library you used.

## 4. Generated images

Use an image model only for pictures that are plainly illustrative: a texture, a pattern, a scene nobody would mistake for a record of something real. Never generate the product, the premises, the food actually sold, staff, customers, or a portrait of a real person. Tell the user which images are generated.

## 5. When there are no pictures

Do not leave grey boxes, and do not fill the gap with abstract shapes.

- **Draw something that carries information.** A map of where the place is. A diagram of how the thing works. The object's outline with its parts named. A chart of real data. Draw it as inline SVG, in the page's own colours and line weight.
- **Let type and layout do the work.** A menu, a timetable or a price list set with care is an image.
- **Reserve the place and say so.** Where a real photo belongs, put a slot with the right aspect ratio and one plain note: "Photo of the shop front goes here." Style it as a note to the owner, not as content. List every slot in your report.

## Using pictures well

- **Choose with intent.** One strong picture, large, beats six small ones. Crop to the subject.
- **Give them one treatment.** The same colour grade, the same corner style, the same aspect ratios across the set.
- **People.** Use real people who agreed to be shown. Never imply that a stock model is staff or a customer.
- **Size and format.** Set `width` and `height` so the page does not jump. Serve a modern format with a fallback, sized for the layout, with `srcset` where the picture is large. Lazy-load what is below the first screen.
- **Alt text** says what the picture shows, for someone who cannot see it. Decorative pictures get `alt=""`.
- **Text over a picture** needs a check for contrast at every breakpoint.
