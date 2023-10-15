---
title: "Developable Approximation via Gauss Image Thinning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- alexandre-binninger
- Floor Verhoeven
- Philipp Herholz
- Olga Sorkine-Hornung

# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"

date: "2021-07-01T00:00:00Z"
doi: "10.1111/cgf.14374"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *EUROGRAPHICS Symposium on Geometry Processing* 2021
publication_short: In *EUROGRAPHICS Symposium on Geometry Processing* 2021

abstract: Approximating 3D shapes with piecewise developable surfaces is an active research topic, driven by the benefits of developable geometry in fabrication. Piecewise developable surfaces are characterized by having a Gauss image that is a 1D object -- a collection of curves on the Gauss sphere. We present a method for developable approximation that makes use of this classic definition from differential geometry. Our algorithm is an iterative process that alternates between thinning the Gauss image of the surface and deforming the surface itself to make its normals comply with the Gauss image. The simple, local-global structure of our algorithm makes it easy to implement and optimize. We validate our method on developable shapes with added noise and demonstrate its effectiveness on a variety of non-developable inputs. Compared to the state of the art, our method is more general, tessellation independent, and preserves the input mesh connectivity.

# Summary. An optional shortened abstract.
summary: We present a method for approximating an input mesh with a piecewise developable surface by thinning its Gauss image. Using an iterative algorithm we are able to concentrate Gauss curvature on creases that naturally emerge over the course of the iterations.


tags: [geometry processing, developable surface]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org
# links:
# - name: Custom Link
#   url: http://example.org

# url_pdf: ''
# url_code: https://github.com/FloorVerhoeven/DevelopableApproximationViaGaussImageThinning
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: https://www.youtube.com/watch?v=k0RVs_FKYd4
links:
  - name: Code
    url: https://github.com/FloorVerhoeven/DevelopableApproximationViaGaussImageThinning
    icon_pack: fab
    icon: github
  - name: Video
    url: https://www.youtube.com/watch?v=k0RVs_FKYd4
    icon_pack: fab
    icon: youtube

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
# - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: "" # example
---
<!---
{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/).
--->

![teaser](teaser.png)

## Video

<div style="text-align: center">
<iframe width="600" height="400"
src="https://www.youtube.com/embed/watch?v=k0RVs_FKYd4&list=PLUykN3u3Z3NUz9kNy-d9bVOrZQVz0T8Yb">
</iframe>
</div>

## Animation

![bunny](bunny.gif)
![bumpy](bumpy.gif)
![dog](dog.gif)
![face](face.gif)