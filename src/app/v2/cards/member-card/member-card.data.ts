export const memberCardData = [
    {
        expandCode: false,
        id:"horizontal-view",
        title: "Members list with horizontal alignment",
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
        copyCSS: `.sb-members-list-item--horizontal {
            .sb-member {
              flex-direction: row;
              flex:1;
              .sb-member__name {
                margin: 0 0 0 calculateRem(8px);
                flex: 1;
                html[dir='rtl'] & {
                  margin: 0 calculateRem(8px) 0 0;
                }
              }
            }
          }`,
        copyVar: ``
    },
    {
        expandCode: false,
        id:"vertical-view",
        title: "Members list with vertical alignment",
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
        copyCSS: `.sb-members-list-item--vertical {
      
          .sb-member {
            flex-direction: column;
      
            .sb-member__name {
              margin: calculateRem(8px) 0 0 0;
              text-align: center;
              width: calculateRem(90px);
              word-break: break-word;
              &.ml-8 {
                margin-left:0px !important;
              }
            }
          }
        }`,
        copyVar: ``
    },
    {
        expandCode: false,
        id:"status",
        title: "Members list with Status and Menu",
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
        copyCSS: ``,
        copyVar: ``
    },
    {
        expandCode: false,
        id:"selected",
        title: "Selected Members list",
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
        copyCSS: `.sb-members-list-item--small .selected img {
            width: 1.5rem;
            border-radius: 50%;
        } `,
        copyVar: ``
    },
    {
        expandCode: false,
        id:"progress",
        title: "Members list with Progress",
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
        copyCSS: `  // percentage circle loader
        .progress-circle {
          height: calculateRem(36px);
          width: calculateRem(36px);
          position: relative;
      
          span {
            position: absolute;
            font-size: calculateRem(10px);
            font-weight: bold;
            margin: 0 auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
      
          &__svg {
            border-radius: 50%;
            height: 100%;
            transform: scaleX(-1) rotate(-90deg);
            width: 100%;
          }
      
          &__stroke {
            fill: none;
            stroke-width: calculateRem(4px);
      
            &:nth-child(1) {
              stroke: var(--secondary-200);
            }
      
            &:nth-child(2) {
              stroke: var(--gray-100);
              stroke-dasharray: 314.1592%;
            }
          }

          &--sm {
            height: calculateRem(32px);
            width: calculateRem(32px);
      
            .progress-circle__stroke {
              stroke-width: calculateRem(8px);
            }
          }
      

        }
        `,
        copyVar: ``
    },
    {
        expandCode: false,
        id:"complete_progress",
        title: "Members list with Success Progress",
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
        copyCSS: `  .progress-circle--success {
            img.icon_progress_check {
              width: 100%;
            }
          }`,
        copyVar: ``,
    },
    {
        expandCode: false,
        id:"sizes",
        title: "Members list with different sizes",
        description: ` <p>Introducing members list in different sizes such as <code>Small</code>,
        <code>Medium </code>and
        <code>Large</code> sizes are using in the class form <code>.sb-members-list-item--size</code> to specify exactly the size of the element. This example shows the small size of members list in the card.</p>`,
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
        .sb-members-list-item &--small {
            .sb-member__img {
              width: calculateRem(32px);
              height: calculateRem(32px);
              font-size: calculateRem(20px);
            }
      
            .sb-member__name {
              font-size: calculateRem(14px);
            }
      
            .selected img {
              width: calculateRem(20px);
            }
      
            .menu::after {
              font-size: calculateRem(16px);
              width: calculateRem(32px);
              height: calculateRem(32px);
            }
          }`,
        copyVar: ``,
    },
    {
        expandCode: false,
        id:"sizes",
        title: "Members list with medium size",
        description: ` <p>Members list size are increased when used with &--medium class.This example shows the medium size of members list in the card.</p>`,   
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
        .sb-members-list-item--medium {
            .sb-member__img {
              width: calculateRem(48px);
              height: calculateRem(48px);
              font-size: calculateRem(34px);
            }
        
            .sb-member__name {
              font-size: calculateRem(16px);
            }
        
            .selected img {
              width: calculateRem(24px);
            }
            .menu::after {
              font-size: calculateRem(24px);
              width: calculateRem(40px);
              height: calculateRem(40px);
            }
          }`,
        copyVar: ``,
    },
    {
        expandCode: false,
        id:"sizes",
        title: "Members list with large size",
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
        .sb-members-list-item--large {
            .sb-member__img {
              width: calculateRem(56px);
              height: calculateRem(56px);
              font-size: calculateRem(38px);
            }
      
            .sb-member__name {
              font-size: calculateRem(18px);
            }
      
            .selected img {
              width: calculateRem(32px);
            }
      
            .menu::after {
              font-size: calculateRem(32px);
              width: calculateRem(48px);
              height: calculateRem(48px);
            }
          }`,
        copyVar: ``,
    }

];