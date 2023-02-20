export const memberCardData = [
  {
    expandCode: false,
    id: "horizontal-view",
    title: "Horizontal Alignment",
    description: `<p>Members list are showing in the horizontal form using this class ".sb-members-list-item--horizontal" in the member card.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: `<div class="sb-members-list-item  sb-members-list-item--small sb-members-list-item--horizontal"
          tabindex="0">
             <div class="sb-member text-left">
                 <div class="sb-member__img"><span>D</span></div>
                 <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
             </div>
           </div>`,
    copyCode: `<div class="sb-members-list-item sb-members-list-item--small sb-members-list-item--horizontal"
          tabindex="0">
             <div class="sb-member text-left">
                 <div class="sb-member__img"><span>D</span></div>
                 <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
             </div>
           </div>`,
    copyCSS: `       
    .sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125rem 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    }`,
    copyVar: ` ::ng-deep :root {
  --sbt-body-bg: #f2f2ea;
  --sbt-body-bg2: #e9e8d9;
  --gray-0:#f2f2f2;
  --gray-100:#ccc;
  --gray-200: #999;
  --secondary-200: #07bc81;
  --white:#fff;
  --cc-members-list-item-selected: var(--sbt-body-bg);
  --cc-members-list-item-selected-border: var(--sbt-body-bg2);
  --cc-members-list-item-menu-text: var(--gray-200);
  --cc-members-list-item-status-text: var(--secondary-200);
  --cc-members-list-item-status-br: var(--secondary-200);
  --cc-members-list-item-status-bg: var(--white);
}`
  },
  {
    expandCode: false,
    id: "vertical-view",
    title: "Vertical Alignment",
    description: `<p>Members list are showing in the vertical form using this class ".sb-members-list-item--vertical in the member card".</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: `<div class="sb-members-list-item sb-members-list-item--small sb-members-list-item--vertical"
          tabindex="0">
             <div class="sb-member text-left">
                 <div class="sb-member__img"><span>D</span></div>
                 <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
             </div>
           </div>`,
    copyCode: `<div class="sb-members-list-item sb-members-list-item--small sb-members-list-item--vertical"
          tabindex="0">
             <div class="sb-member text-left">
                 <div class="sb-member__img"><span>D</span></div>
                 <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
             </div>
           </div>`,
    copyCSS: `
        .sb-members-list-item {
          display: flex;
          align-items: center;
          border: 0.0625rem solid transparent;
          position: relative;
        
        }
        .sb-members-list-item:hover, .sb-members-list-item.selectElement {
          background-color: var(--cc-members-list-item-selected);
          border: 0.0625rem solid var(--cc-members-list-item-selected-border);
          cursor: pointer;
        }
        .sb-members-list-item .menu::after {
          content: "⠇";
          font-size: 1.5rem;
          color: var(--cc-members-list-item-menu-text);
          text-align: center;
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 50%;
          padding-left: 0.25rem 1rem;
          padding-top: 0.125 1rem;
          cursor: pointer;
        }
        html[dir=rtl] .sb-members-list-item .menu::after {
          padding-right: 0.25rem 1rem;
          padding-left: 0px 1rem;
        }
        .sb-members-list-item .menu:hover::after {
          background: var(--gray-0);
        }
        .sb-members-list-item .status {
          border: 0.0625rem solid var(--cc-members-list-item-status-br);
          border-radius: 0.125rem 1rem;
          font-size: 0.6875rem;
          color: var(--cc-members-list-item-status-text);
          background-color: var(--cc-members-list-item-status-bg);
          padding: 0.25rem 1rem 0.5rem 1rem;
        }
        .sb-members-list-item .sb-member {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
        }
        .sb-members-list-item .sb-member__name {
          font-weight: normal;
          cursor: pointer;
        }
        .sb-members-list-item .sb-member__img {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--white);
          box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
          font-weight: bold;
          text-transform: uppercase;
          padding-top: 0.125rem 1rem;
        }
        .sb-members-list-item--bold .sb-member__name {
          font-weight: bold;
        }
        .sb-members-list-item--horizontal .sb-member {
          flex-direction: row;
          flex: 1;
        }
        .sb-members-list-item--horizontal .sb-member .sb-member__name {
          margin: 0 0 0 0.5rem;
          flex: 1;
        }
        html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
          margin: 0 0.5rem 1rem 0 0;
        }
        .sb-members-list-item--vertical .sb-member {
          flex-direction: column;
        }
        .sb-members-list-item--vertical .sb-member .sb-member__name {
          margin: 0.5rem 1rem 0 0 0;
          text-align: center;
          width: 5.625rem;
          word-break: break-word;
        }
        .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
          margin-left: 0px !important;
        }
        .sb-members-list-item--small .sb-member__img {
          width: 2rem;
          height: 2rem;
          font-size: 1.25rem;
        }
        .sb-members-list-item--small .sb-member__name {
          font-size: 0.87rem;
        }
        .sb-members-list-item--small .selected img {
          width: 1.25rem;
        }
        .sb-members-list-item--small .menu::after {
          font-size: 1rem;
          width: 2rem;
          height: 2rem;
        }
        .sb-members-list-item--medium .sb-member__img {
          width: 3rem;
          height: 3rem;
          font-size: 2.125rem;
        }
        .sb-members-list-item--medium .sb-member__name {
          font-size: 1rem;
        }
        .sb-members-list-item--medium .selected img {
          width: 1.5rem;
        }
        .sb-members-list-item--medium .menu::after {
          font-size: 1.5rem;
          width: 2.5rem;
          height: 2.5rem;
        }
        .sb-members-list-item--large .sb-member__img {
          width: 3.5rem;
          height: 3.5rem;
          font-size: 2.375rem;
        }
        .sb-members-list-item--large .sb-member__name {
          font-size: 1.125rem;
        }
        .sb-members-list-item--large .selected img {
          width: 2rem;
        }
        .sb-members-list-item--large .menu::after {
          font-size: 2rem;
          width: 3rem;
          height: 3rem;
        }
        
        .progress-circle {
          height: 2.25rem;
          width: 2.25rem;
          position: relative;
        }
        .progress-circle span {
          position: absolute;
          font-size: 0.625rem;
          font-weight: bold;
          margin: 0 auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .progress-circle__svg {
          border-radius: 50%;
          height: 100%;
          transform: scaleX(-1) rotate(-90deg);
          width: 100%;
        }
        .progress-circle__stroke {
          fill: none;
          stroke-width: 0.25rem;
        }
        .progress-circle__stroke:nth-child(1) {
          stroke: var(--secondary-200);
        }
        .progress-circle__stroke:nth-child(2) {
          stroke: var(--gray-100);
          stroke-dasharray: 314.1592%;
        }
        .progress-circle--xs span {
          display: none;
        }
        .progress-circle--xs {
          height: 1.5rem;
          width: 1.5rem;
        }
        .progress-circle--xs .progress-circle__stroke {
          stroke-width: 0.25rem;
        }
        .progress-circle--sm {
          height: 2rem;
          width: 2rem;
        }
        .progress-circle--sm .progress-circle__stroke {
          stroke-width: 0.5rem;
        }
        .progress-circle--md {
          height: 3rem;
          width: 3rem;
        }
        .progress-circle--md .progress-circle__stroke {
          stroke-width: 0.75rem;
        }
        .progress-circle--md span {
          font-size: 0.625rem;
        }
        .progress-circle--lg {
          height: 4rem;
          width: 4rem;
        }
        .progress-circle--lg .progress-circle__stroke {
          stroke-width: 1rem;
        }
        .progress-circle--lg span {
          font-size: 0.87rem;
        }
        .progress-circle--xl {
          height: 4.5rem;
          width: 4.5rem;
        }
        .progress-circle--xl .progress-circle__stroke {
          stroke-width: 1.25rem;
        }
        .progress-circle--xl span {
          font-size: 1.125rem;
        }
        .progress-circle--xxl {
          height: 5.5rem;
          width: 5.5rem;
        }
        .progress-circle--xxl .progress-circle__stroke {
          stroke-width: 1.5rem;
        }
        .progress-circle--xxl span {
          font-size: 1.25rem;
        }
        .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (0 / 100));
        }
        .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (1 / 100));
        }
        .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (2 / 100));
        }
        .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (3 / 100));
        }
        .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (4 / 100));
        }
        .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (5 / 100));
        }
        .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (6 / 100));
        }
        .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (7 / 100));
        }
        .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (8 / 100));
        }
        .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (9 / 100));
        }
        .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (10 / 100));
        }
        .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (11 / 100));
        }
        .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (12 / 100));
        }
        .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (13 / 100));
        }
        .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (14 / 100));
        }
        .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (15 / 100));
        }
        .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (16 / 100));
        }
        .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (17 / 100));
        }
        .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (18 / 100));
        }
        .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (19 / 100));
        }
        .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (20 / 100));
        }
        .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (21 / 100));
        }
        .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (22 / 100));
        }
        .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (23 / 100));
        }
        .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (24 / 100));
        }
        .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (25 / 100));
        }
        .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (26 / 100));
        }
        .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (27 / 100));
        }
        .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (28 / 100));
        }
        .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (29 / 100));
        }
        .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (30 / 100));
        }
        .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (31 / 100));
        }
        .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (32 / 100));
        }
        .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (33 / 100));
        }
        .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (34 / 100));
        }
        .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (35 / 100));
        }
        .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (36 / 100));
        }
        .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (37 / 100));
        }
        .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (38 / 100));
        }
        .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (39 / 100));
        }
        .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (40 / 100));
        }
        .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (41 / 100));
        }
        .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (42 / 100));
        }
        .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (43 / 100));
        }
        .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (44 / 100));
        }
        .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (45 / 100));
        }
        .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (46 / 100));
        }
        .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (47 / 100));
        }
        .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (48 / 100));
        }
        .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (49 / 100));
        }
        .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (50 / 100));
        }
        .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (51 / 100));
        }
        .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (52 / 100));
        }
        .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (53 / 100));
        }
        .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (54 / 100));
        }
        .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (55 / 100));
        }
        .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (56 / 100));
        }
        .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (57 / 100));
        }
        .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (58 / 100));
        }
        .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (59 / 100));
        }
        .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (60 / 100));
        }
        .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (61 / 100));
        }
        .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (62 / 100));
        }
        .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (63 / 100));
        }
        .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (64 / 100));
        }
        .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (65 / 100));
        }
        .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (66 / 100));
        }
        .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (67 / 100));
        }
        .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (68 / 100));
        }
        .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (69 / 100));
        }
        .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (70 / 100));
        }
        .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (71 / 100));
        }
        .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (72 / 100));
        }
        .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (73 / 100));
        }
        .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (74 / 100));
        }
        .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (75 / 100));
        }
        .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (76 / 100));
        }
        .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (77 / 100));
        }
        .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (78 / 100));
        }
        .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (79 / 100));
        }
        .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (80 / 100));
        }
        .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (81 / 100));
        }
        .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (82 / 100));
        }
        .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (83 / 100));
        }
        .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (84 / 100));
        }
        .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (85 / 100));
        }
        .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (86 / 100));
        }
        .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (87 / 100));
        }
        .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (88 / 100));
        }
        .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (89 / 100));
        }
        .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (90 / 100));
        }
        .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (91 / 100));
        }
        .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (92 / 100));
        }
        .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (93 / 100));
        }
        .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (94 / 100));
        }
        .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (95 / 100));
        }
        .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (96 / 100));
        }
        .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (97 / 100));
        }
        .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (98 / 100));
        }
        .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
          stroke-dashoffset: calc(314.1592% * (99 / 100));
        }
        .progress-circle--success img.icon_progress_check {
          width: 100%;
        }`,
    copyVar: ` ::ng-deep :root {
  --sbt-body-bg: #f2f2ea;
  --sbt-body-bg2: #e9e8d9;
  --gray-0:#f2f2f2;
  --gray-100:#ccc;
  --gray-200: #999;
  --secondary-200: #07bc81;
  --white:#fff;
  --cc-members-list-item-selected: var(--sbt-body-bg);
  --cc-members-list-item-selected-border: var(--sbt-body-bg2);
  --cc-members-list-item-menu-text: var(--gray-200);
  --cc-members-list-item-status-text: var(--secondary-200);
  --cc-members-list-item-status-br: var(--secondary-200);
  --cc-members-list-item-status-bg: var(--white);
}`
  },
  {
    expandCode: false,
    id: "status",
    title: "Admin and Menu",
    description: `<p>Members list are showing with menu and status of member in the member card.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
           <div class="d-flex flex-ai-center">
             <div class="status">Admin</div>
             <div class="menu ml-8" tabindex="0"></div>
           </div>
         <div tabindex="0"><img src="" alt=""></div>
       </div>
     </div>`,
    copyCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
           <div class="d-flex flex-ai-center">
             <div class="status">Admin</div>
             <div class="menu ml-8" tabindex="0"></div>
           </div>
         <div tabindex="0"><img src="" alt=""></div>
       </div>
     </div>`,
    copyCSS: `       
    .sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    }`,
    copyVar: ` ::ng-deep :root {
  --sbt-body-bg: #f2f2ea;
  --sbt-body-bg2: #e9e8d9;
  --gray-0:#f2f2f2;
  --gray-100:#ccc;
  --gray-200: #999;
  --secondary-200: #07bc81;
  --white:#fff;
  --cc-members-list-item-selected: var(--sbt-body-bg);
  --cc-members-list-item-selected-border: var(--sbt-body-bg2);
  --cc-members-list-item-menu-text: var(--gray-200);
  --cc-members-list-item-status-text: var(--secondary-200);
  --cc-members-list-item-status-br: var(--secondary-200);
  --cc-members-list-item-status-bg: var(--white);
}`
  },
  {
    expandCode: false,
    id: "selected",
    title: "Selected",
    description: `<p>Members are selected only in the horizontal view.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
         <div class="selected ml-8"><img alt="" class="icon_select" src="assets/images/selected.svg"></div>
     </div>
     </div>`,
    copyCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
         <div class="selected ml-8"><img alt="" class="icon_select" src="assets/images/selected.svg"></div>
       </div>
     </div>`,
    copyCSS: `       
    .sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125rem 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    } `,
    copyVar: ` ::ng-deep :root {
  --sbt-body-bg: #f2f2ea;
  --sbt-body-bg2: #e9e8d9;
  --gray-0:#f2f2f2;
  --gray-100:#ccc;
  --gray-200: #999;
  --secondary-200: #07bc81;
  --white:#fff;
  --cc-members-list-item-selected: var(--sbt-body-bg);
  --cc-members-list-item-selected-border: var(--sbt-body-bg2);
  --cc-members-list-item-menu-text: var(--gray-200);
  --cc-members-list-item-status-text: var(--secondary-200);
  --cc-members-list-item-status-br: var(--secondary-200);
  --cc-members-list-item-status-bg: var(--white);
}`
  },
  {
    expandCode: false,
    id: "progress",
    title: "Progress Loader",
    description: `<p>Members list progress are displaying the progress of member in the percentage form,how much progress has done and it is showing only in the horizontal view.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
         <div class="ml-8 progress-circle progress-circle--sm">
          <svg class="progress-circle__svg" viewport="0 0 2000 2000">
            <circle class="progress-circle__stroke" r="50%" cx="50%" cy="50%"></circle>
            <circle class="progress-circle__stroke" r="50%" cx="50%" cy="50%"></circle>
          </svg>
          <span>60%</span>
        </div>
     </div>
     </div>`,
    copyCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
         <div class="ml-8 progress-circle progress-circle--sm">
          <svg class="progress-circle__svg" viewport="0 0 2000 2000">
            <circle class="progress-circle__stroke" r="50%" cx="50%" cy="50%"></circle>
            <circle class="progress-circle__stroke" r="50%" cx="50%" cy="50%"></circle>
          </svg>
          <span>60%</span>
        </div>
       </div>
     </div>`,
    copyCSS: ` .sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125rem 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    }
        `,
    copyVar: `::ng-deep :root {
      --cc-members-list-item-selected: var(--sbt-body-bg);
      --cc-members-list-item-selected-border: var(--sbt-body-bg2);
      --cc-members-list-item-menu-text: var(--gray-200);
      --cc-members-list-item-status-text: var(--secondary-200);
      --cc-members-list-item-status-br: var(--secondary-200);
      --cc-members-list-item-status-bg: var(--white);
    }`
  },
  {
    expandCode: false,
    id: "complete_progress",
    title: "Success Progress",
    description: `<p>Members list are displaying succeed when it is completed the progress through done icon and it is showing only in the horizontal view.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
         <div class="progress-circle progress-circle--sm progress-circle--success"><img class="icon_progress_check" alt="" src="assets/images/completed.svg"></div>
     </div>
     </div>`,
    copyCode: ` <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small" tabindex="0">
        <div class="sb-member text-left">
            <div class="sb-member__img"><span>D</span></div>
            <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
        </div>
         <div class="d-flex flex-ai-center pr-8">
         <div class="progress-circle progress-circle--sm progress-circle--success"><img class="icon_progress_check" alt="" src="assets/images/completed.svg"></div>
       </div>
     </div>`,
    copyCSS: `.sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125rem 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    } `,
    copyVar: `::ng-deep :root {
      --cc-members-list-item-selected: var(--sbt-body-bg);
      --cc-members-list-item-selected-border: var(--sbt-body-bg2);
      --cc-members-list-item-menu-text: var(--gray-200);
      --cc-members-list-item-status-text: var(--secondary-200);
      --cc-members-list-item-status-br: var(--secondary-200);
      --cc-members-list-item-status-bg: var(--white);
    }`,
  },
  {
    expandCode: false,
    id: "sizes",
    title: "Different Sizes",
    description: ` <p>Introducing members list in different sizes such as <code>Small</code>,
        <code>Medium </code>and
        <code>Large</code> sizes are using in the class form <code>.sb-members-list-item{{--size}} class</code> to specify exactly the size of the element. This example shows the small size of members list in the card.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: `<!-- member list in small size -->
        <div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small"
          tabindex="0">
             <div class="sb-member text-left">
                 <div class="sb-member__img"><span>D</span></div>
                 <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
             </div>
           </div>`,
    copyCode: `<div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--small"
          tabindex="0">
             <div class="sb-member text-left">
                 <div class="sb-member__img"><span>D</span></div>
                 <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
             </div>
           </div>`,
    copyCSS: `   
    .sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125rem 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    }`,
    copyVar: ` ::ng-deep :root {
  --sbt-body-bg: #f2f2ea;
  --sbt-body-bg2: #e9e8d9;
  --gray-0:#f2f2f2;
  --gray-100:#ccc;
  --gray-200: #999;
  --secondary-200: #07bc81;
  --white:#fff;
  --cc-members-list-item-selected: var(--sbt-body-bg);
  --cc-members-list-item-selected-border: var(--sbt-body-bg2);
  --cc-members-list-item-menu-text: var(--gray-200);
  --cc-members-list-item-status-text: var(--secondary-200);
  --cc-members-list-item-status-br: var(--secondary-200);
  --cc-members-list-item-status-bg: var(--white);
}`,
  },
  {
    expandCode: false,
    id: "sizes",
    title: "Medium size",
    description: ` <p>Members list size are increased when used with &--medium class.This example shows the large size of members list in the card.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: `<div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--medium"
        tabindex="0">
           <div class="sb-member text-left">
               <div class="sb-member__img"><span>D</span></div>
               <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
           </div>
         </div>`,
    copyCode: `<div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--medium"
        tabindex="0">
           <div class="sb-member text-left">
               <div class="sb-member__img"><span>D</span></div>
               <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
           </div>
         </div>`,
    copyCSS: `          
    .sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125rem 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    }`,
    copyVar: ` ::ng-deep :root {
  --sbt-body-bg: #f2f2ea;
  --sbt-body-bg2: #e9e8d9;
  --gray-0:#f2f2f2;
  --gray-100:#ccc;
  --gray-200: #999;
  --secondary-200: #07bc81;
  --white:#fff;
  --cc-members-list-item-selected: var(--sbt-body-bg);
  --cc-members-list-item-selected-border: var(--sbt-body-bg2);
  --cc-members-list-item-menu-text: var(--gray-200);
  --cc-members-list-item-status-text: var(--secondary-200);
  --cc-members-list-item-status-br: var(--secondary-200);
  --cc-members-list-item-status-bg: var(--white);
}`,
  },
  {
    expandCode: false,
    id: "sizes",
    title: "Large size",
    description: ` <p>Members list size are increased when used with &--large class.This example shows the large size of members list in the card.</p>`,
    url: "https://stackblitz.com/edit/web-platform-vhadub?file=index.html",
    demoCode: `<div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--large"
        tabindex="0">
           <div class="sb-member text-left">
               <div class="sb-member__img"><span>D</span></div>
               <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
           </div>
         </div>`,
    copyCode: `<div class="sb-members-list-item sb-members-list-item--horizontal sb-members-list-item--large"
        tabindex="0">
           <div class="sb-member text-left">
               <div class="sb-member__img"><span>D</span></div>
               <label class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"><span>Dummy&lrm;</span></label>   
           </div>
         </div>`,
    copyCSS: `          
    .sb-members-list-item {
      display: flex;
      align-items: center;
      border: 0.0625rem solid transparent;
      position: relative;
    
    }
    .sb-members-list-item:hover, .sb-members-list-item.selectElement {
      background-color: var(--cc-members-list-item-selected);
      border: 0.0625rem solid var(--cc-members-list-item-selected-border);
      cursor: pointer;
    }
    .sb-members-list-item .menu::after {
      content: "⠇";
      font-size: 1.5rem;
      color: var(--cc-members-list-item-menu-text);
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding-left: 0.25rem 1rem;
      padding-top: 0.125rem 1rem;
      cursor: pointer;
    }
    html[dir=rtl] .sb-members-list-item .menu::after {
      padding-right: 0.25rem 1rem;
      padding-left: 0px 1rem;
    }
    .sb-members-list-item .menu:hover::after {
      background: var(--gray-0);
    }
    .sb-members-list-item .status {
      border: 0.0625rem solid var(--cc-members-list-item-status-br);
      border-radius: 0.125rem 1rem;
      font-size: 0.6875rem;
      color: var(--cc-members-list-item-status-text);
      background-color: var(--cc-members-list-item-status-bg);
      padding: 0.25rem 1rem 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
    }
    .sb-members-list-item .sb-member__name {
      font-weight: normal;
      cursor: pointer;
    }
    .sb-members-list-item .sb-member__img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: var(--white);
      box-shadow: 0 0 6px 0 rgba(var(--rc-rgba-black), 0.1);
      font-weight: bold;
      text-transform: uppercase;
      padding-top: 0.125rem 1rem;
    }
    .sb-members-list-item--bold .sb-member__name {
      font-weight: bold;
    }
    .sb-members-list-item--horizontal .sb-member {
      flex-direction: row;
      flex: 1;
    }
    .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0 0 0.5rem;
      flex: 1;
    }
    html[dir=rtl] .sb-members-list-item--horizontal .sb-member .sb-member__name {
      margin: 0 0.5rem 1rem 0 0;
    }
    .sb-members-list-item--vertical .sb-member {
      flex-direction: column;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name {
      margin: 0.5rem 1rem 0 0 0;
      text-align: center;
      width: 5.625rem;
      word-break: break-word;
    }
    .sb-members-list-item--vertical .sb-member .sb-member__name.ml-8 {
      margin-left: 0px !important;
    }
    .sb-members-list-item--small .sb-member__img {
      width: 2rem;
      height: 2rem;
      font-size: 1.25rem;
    }
    .sb-members-list-item--small .sb-member__name {
      font-size: 0.87rem;
    }
    .sb-members-list-item--small .selected img {
      width: 1.25rem;
    }
    .sb-members-list-item--small .menu::after {
      font-size: 1rem;
      width: 2rem;
      height: 2rem;
    }
    .sb-members-list-item--medium .sb-member__img {
      width: 3rem;
      height: 3rem;
      font-size: 2.125rem;
    }
    .sb-members-list-item--medium .sb-member__name {
      font-size: 1rem;
    }
    .sb-members-list-item--medium .selected img {
      width: 1.5rem;
    }
    .sb-members-list-item--medium .menu::after {
      font-size: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    .sb-members-list-item--large .sb-member__img {
      width: 3.5rem;
      height: 3.5rem;
      font-size: 2.375rem;
    }
    .sb-members-list-item--large .sb-member__name {
      font-size: 1.125rem;
    }
    .sb-members-list-item--large .selected img {
      width: 2rem;
    }
    .sb-members-list-item--large .menu::after {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
    }
    
    .progress-circle {
      height: 2.25rem;
      width: 2.25rem;
      position: relative;
    }
    .progress-circle span {
      position: absolute;
      font-size: 0.625rem;
      font-weight: bold;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .progress-circle__svg {
      border-radius: 50%;
      height: 100%;
      transform: scaleX(-1) rotate(-90deg);
      width: 100%;
    }
    .progress-circle__stroke {
      fill: none;
      stroke-width: 0.25rem;
    }
    .progress-circle__stroke:nth-child(1) {
      stroke: var(--secondary-200);
    }
    .progress-circle__stroke:nth-child(2) {
      stroke: var(--gray-100);
      stroke-dasharray: 314.1592%;
    }
    .progress-circle--xs span {
      display: none;
    }
    .progress-circle--xs {
      height: 1.5rem;
      width: 1.5rem;
    }
    .progress-circle--xs .progress-circle__stroke {
      stroke-width: 0.25rem;
    }
    .progress-circle--sm {
      height: 2rem;
      width: 2rem;
    }
    .progress-circle--sm .progress-circle__stroke {
      stroke-width: 0.5rem;
    }
    .progress-circle--md {
      height: 3rem;
      width: 3rem;
    }
    .progress-circle--md .progress-circle__stroke {
      stroke-width: 0.75rem;
    }
    .progress-circle--md span {
      font-size: 0.625rem;
    }
    .progress-circle--lg {
      height: 4rem;
      width: 4rem;
    }
    .progress-circle--lg .progress-circle__stroke {
      stroke-width: 1rem;
    }
    .progress-circle--lg span {
      font-size: 0.87rem;
    }
    .progress-circle--xl {
      height: 4.5rem;
      width: 4.5rem;
    }
    .progress-circle--xl .progress-circle__stroke {
      stroke-width: 1.25rem;
    }
    .progress-circle--xl span {
      font-size: 1.125rem;
    }
    .progress-circle--xxl {
      height: 5.5rem;
      width: 5.5rem;
    }
    .progress-circle--xxl .progress-circle__stroke {
      stroke-width: 1.5rem;
    }
    .progress-circle--xxl span {
      font-size: 1.25rem;
    }
    .progress-circle[data-percentage="0"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (0 / 100));
    }
    .progress-circle[data-percentage="1"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (1 / 100));
    }
    .progress-circle[data-percentage="2"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (2 / 100));
    }
    .progress-circle[data-percentage="3"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (3 / 100));
    }
    .progress-circle[data-percentage="4"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (4 / 100));
    }
    .progress-circle[data-percentage="5"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (5 / 100));
    }
    .progress-circle[data-percentage="6"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (6 / 100));
    }
    .progress-circle[data-percentage="7"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (7 / 100));
    }
    .progress-circle[data-percentage="8"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (8 / 100));
    }
    .progress-circle[data-percentage="9"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (9 / 100));
    }
    .progress-circle[data-percentage="10"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (10 / 100));
    }
    .progress-circle[data-percentage="11"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (11 / 100));
    }
    .progress-circle[data-percentage="12"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (12 / 100));
    }
    .progress-circle[data-percentage="13"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (13 / 100));
    }
    .progress-circle[data-percentage="14"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (14 / 100));
    }
    .progress-circle[data-percentage="15"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (15 / 100));
    }
    .progress-circle[data-percentage="16"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (16 / 100));
    }
    .progress-circle[data-percentage="17"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (17 / 100));
    }
    .progress-circle[data-percentage="18"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (18 / 100));
    }
    .progress-circle[data-percentage="19"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (19 / 100));
    }
    .progress-circle[data-percentage="20"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (20 / 100));
    }
    .progress-circle[data-percentage="21"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (21 / 100));
    }
    .progress-circle[data-percentage="22"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (22 / 100));
    }
    .progress-circle[data-percentage="23"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (23 / 100));
    }
    .progress-circle[data-percentage="24"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (24 / 100));
    }
    .progress-circle[data-percentage="25"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (25 / 100));
    }
    .progress-circle[data-percentage="26"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (26 / 100));
    }
    .progress-circle[data-percentage="27"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (27 / 100));
    }
    .progress-circle[data-percentage="28"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (28 / 100));
    }
    .progress-circle[data-percentage="29"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (29 / 100));
    }
    .progress-circle[data-percentage="30"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (30 / 100));
    }
    .progress-circle[data-percentage="31"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (31 / 100));
    }
    .progress-circle[data-percentage="32"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (32 / 100));
    }
    .progress-circle[data-percentage="33"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (33 / 100));
    }
    .progress-circle[data-percentage="34"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (34 / 100));
    }
    .progress-circle[data-percentage="35"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (35 / 100));
    }
    .progress-circle[data-percentage="36"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (36 / 100));
    }
    .progress-circle[data-percentage="37"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (37 / 100));
    }
    .progress-circle[data-percentage="38"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (38 / 100));
    }
    .progress-circle[data-percentage="39"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (39 / 100));
    }
    .progress-circle[data-percentage="40"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (40 / 100));
    }
    .progress-circle[data-percentage="41"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (41 / 100));
    }
    .progress-circle[data-percentage="42"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (42 / 100));
    }
    .progress-circle[data-percentage="43"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (43 / 100));
    }
    .progress-circle[data-percentage="44"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (44 / 100));
    }
    .progress-circle[data-percentage="45"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (45 / 100));
    }
    .progress-circle[data-percentage="46"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (46 / 100));
    }
    .progress-circle[data-percentage="47"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (47 / 100));
    }
    .progress-circle[data-percentage="48"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (48 / 100));
    }
    .progress-circle[data-percentage="49"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (49 / 100));
    }
    .progress-circle[data-percentage="50"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (50 / 100));
    }
    .progress-circle[data-percentage="51"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (51 / 100));
    }
    .progress-circle[data-percentage="52"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (52 / 100));
    }
    .progress-circle[data-percentage="53"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (53 / 100));
    }
    .progress-circle[data-percentage="54"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (54 / 100));
    }
    .progress-circle[data-percentage="55"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (55 / 100));
    }
    .progress-circle[data-percentage="56"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (56 / 100));
    }
    .progress-circle[data-percentage="57"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (57 / 100));
    }
    .progress-circle[data-percentage="58"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (58 / 100));
    }
    .progress-circle[data-percentage="59"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (59 / 100));
    }
    .progress-circle[data-percentage="60"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (60 / 100));
    }
    .progress-circle[data-percentage="61"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (61 / 100));
    }
    .progress-circle[data-percentage="62"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (62 / 100));
    }
    .progress-circle[data-percentage="63"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (63 / 100));
    }
    .progress-circle[data-percentage="64"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (64 / 100));
    }
    .progress-circle[data-percentage="65"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (65 / 100));
    }
    .progress-circle[data-percentage="66"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (66 / 100));
    }
    .progress-circle[data-percentage="67"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (67 / 100));
    }
    .progress-circle[data-percentage="68"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (68 / 100));
    }
    .progress-circle[data-percentage="69"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (69 / 100));
    }
    .progress-circle[data-percentage="70"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (70 / 100));
    }
    .progress-circle[data-percentage="71"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (71 / 100));
    }
    .progress-circle[data-percentage="72"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (72 / 100));
    }
    .progress-circle[data-percentage="73"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (73 / 100));
    }
    .progress-circle[data-percentage="74"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (74 / 100));
    }
    .progress-circle[data-percentage="75"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (75 / 100));
    }
    .progress-circle[data-percentage="76"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (76 / 100));
    }
    .progress-circle[data-percentage="77"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (77 / 100));
    }
    .progress-circle[data-percentage="78"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (78 / 100));
    }
    .progress-circle[data-percentage="79"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (79 / 100));
    }
    .progress-circle[data-percentage="80"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (80 / 100));
    }
    .progress-circle[data-percentage="81"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (81 / 100));
    }
    .progress-circle[data-percentage="82"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (82 / 100));
    }
    .progress-circle[data-percentage="83"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (83 / 100));
    }
    .progress-circle[data-percentage="84"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (84 / 100));
    }
    .progress-circle[data-percentage="85"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (85 / 100));
    }
    .progress-circle[data-percentage="86"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (86 / 100));
    }
    .progress-circle[data-percentage="87"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (87 / 100));
    }
    .progress-circle[data-percentage="88"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (88 / 100));
    }
    .progress-circle[data-percentage="89"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (89 / 100));
    }
    .progress-circle[data-percentage="90"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (90 / 100));
    }
    .progress-circle[data-percentage="91"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (91 / 100));
    }
    .progress-circle[data-percentage="92"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (92 / 100));
    }
    .progress-circle[data-percentage="93"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (93 / 100));
    }
    .progress-circle[data-percentage="94"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (94 / 100));
    }
    .progress-circle[data-percentage="95"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (95 / 100));
    }
    .progress-circle[data-percentage="96"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (96 / 100));
    }
    .progress-circle[data-percentage="97"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (97 / 100));
    }
    .progress-circle[data-percentage="98"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (98 / 100));
    }
    .progress-circle[data-percentage="99"] .progress-circle__stroke:nth-child(2) {
      stroke-dashoffset: calc(314.1592% * (99 / 100));
    }
    .progress-circle--success img.icon_progress_check {
      width: 100%;
    }`,
    copyVar: ` ::ng-deep :root {
  --sbt-body-bg: #f2f2ea;
  --sbt-body-bg2: #e9e8d9;
  --gray-0:#f2f2f2;
  --gray-100:#ccc;
  --gray-200: #999;
  --secondary-200: #07bc81;
  --white:#fff;
  --cc-members-list-item-selected: var(--sbt-body-bg);
  --cc-members-list-item-selected-border: var(--sbt-body-bg2);
  --cc-members-list-item-menu-text: var(--gray-200);
  --cc-members-list-item-status-text: var(--secondary-200);
  --cc-members-list-item-status-br: var(--secondary-200);
  --cc-members-list-item-status-bg: var(--white);
}`,
  }

];