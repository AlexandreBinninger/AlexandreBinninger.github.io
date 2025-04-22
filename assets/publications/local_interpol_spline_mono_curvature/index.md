---
title: "Smooth Interpolating Curves with Local Control and Monotone Alternating Curvature"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- alexandre-binninger
- Olga Sorkine-Hornung 

# Author notes (optional)
# author_notes:

date: "2022-07-01T00:00:00Z"
doi: "10.1111/cgf.14601"

# Schedule page publish date (NOT publication's date).
publishDate: "2022-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *EUROGRAPHICS Symposium on Geometry Processing* 2022
publication_short: In *EUROGRAPHICS Symposium on Geometry Processing* 2022

abstract: "We propose a method for the construction of a planar curve based on piecewise clothoids and straight lines that intuitively interpolates a given sequence of control points. Our method has several desirable properties that are not simultaneously fulfilled by previous approaches: Our interpolating curves are $C^2$ continuous, their computation does not rely on global optimization and has local support, enabling fast evaluation for interactive modeling. Further, the sign of the curvature at control points is consistent with the control polygon; the curvature attains its extrema at control points and is monotone between consecutive control points of opposite curvature signs. In addition, we can ensure that the curve has self-intersections only when the control polygon also self-intersects between the same control points. For more fine-grained control, the user can specify the desired curvature and tangent values at certain control points, though it is not  required by our method. Our local optimization can lead to discontinuity w.r.t.\ the locations of control points, although the problem is limited by its locality. We demonstrate the utility of our approach in generating various curves and provide a comparison with the state of the art."

# Summary. An optional shortened abstract.
summary: "We propose a method for the construction of a planar curve based on piecewise clothoids and straight lines that has several desirable properties that are not simultaneously fulfilled by previous approaches: $C^2$ continuity, local support, curvature sign at control points consistent with the control polygon, curvature extrema at control points and monotone curvature between consecutive control points of opposite curvature signs."


tags: ["parametric curves", "modeling"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# url_pdf: ''
# url_code: https://github.com/AlexandreBinninger/Local-Smooth-Interpolating-MonoCurvature/
# url_dataset: ''
# url_poster: ''
# url_project: ''
# url_slides: ''
# url_source: ''
# url_video: https://youtu.be/t0I-pWYvDS8?t=11989/


links:
  - name: Code
    url: https://github.com/AlexandreBinninger/Local-Smooth-Interpolating-MonoCurvature/
    icon_pack: fab
    icon: github
  - name: Video
    url: https://youtu.be/t0I-pWYvDS8?t=11989/
    icon_pack: fab
    icon: youtube

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: "" #'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ""
  preview_only: true

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


## Talk

<div style="text-align: center">
<iframe width="600" height="400"
src="https://youtube.com/embed/t0I-pWYvDS8?t=11989">
</iframe>
</div>

 
<div style="text-align: center">

##### Comparison table
<div>


| ![teaser_blending.png](results/teaser_blending.svg)      | ![teaser_kappa.png](results/teaser_kappa.svg)       | ![teaser_3arcs.png](results/teaser_3arcs.svg)  | ![teaser_clotho_line.png](results/teaser_clotho_line.svg)  |
| :---:        |    :----:   |          :---: |         :---: |
| [Trigonometric Blending](https://dl.acm.org/doi/10.1145/3400301)      | [$\kappa$-curves](https://dl.acm.org/doi/10.1145/3072959.3073692) | 3-arcs clothoid     | clothoid-line-clothoid     |

<div style="text-align: right"><sub><sup>(Open images in a new tab to display the .svg properly)</sup></sub><div>