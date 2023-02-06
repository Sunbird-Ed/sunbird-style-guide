export const memberCardData = [
    {
        expandCode: false,
        title: "Member card",
        url: "https://stackblitz.com/edit/web-platform-vhadub?file=styles.css,index.html,member-card%2Fmember-card.html,member-card%2Fmember-card.css,script.js",
        demoCode: `   <div
        class="
          sb-members-list-item
          sb-members-list-item--medium
          sb-members-list-item--horizontal
        "
        tabindex="0"
      >
        <div class="sb-member text-left">
          <div class="sb-member__img"><span>D</span></div>
          <label
            class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"
            title="{{title}}"
            ><span>title&lrm;</span></label
          >
        </div>
        <div class="d-flex flex-ai-center pr-8">
          <div class="d-flex flex-ai-center">
            <div
              [style.visibility]="isAdmin ? 'visible' : 'visible'"
              class="status"
            >
              Admin
            </div>
            <div
              [style.visibility]="isMenu ? 'visible' : 'visible'"
              class="menu ml-8"
              tabindex="0"
            ></div>
          </div>
          <div tabindex="0">
            <img [src]="cardImg" alt="" />
          </div>
          <div class="selected ml-8">
            <img class="icon_select" alt="" src="assets/images/selected.svg" />
          </div>
          <div
            class="ml-8 progress-circle progress-circle--{{config?.progressSize}}"
            [attr.data-percentage]="progressDisplay"
          >
            <svg class="progress-circle__svg" viewport="0 0 2000 2000">
              <circle
                class="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
              <circle
                class="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
            </svg>
            <span>30%</span>
          </div>
          <div
            class="progress-circle progress-circle--sm progress-circle--success"
          >
            <img
              class="icon_progress_check"
              alt=""
              src="assets/images/completed.svg"
            />
          </div>
        </div>
      </div>`,
        copyCode: `   <div
        class="
          sb-members-list-item
          sb-members-list-item--medium
          sb-members-list-item--horizontal
        "
        tabindex="0"
      >
        <div class="sb-member text-left">
          <div class="sb-member__img"><span>D</span></div>
          <label
            class="sb-member__name sb__ellipsis sb__ellipsis--two ml-8"
            ><span>title&lrm;</span></label
          >
        </div>
        <div class="d-flex flex-ai-center pr-8">
          <div class="d-flex flex-ai-center">
            <div
              [style.visibility]="isAdmin ? 'visible' : 'visible'"
              class="status"
            >
              Admin
            </div>
            <div
              [style.visibility]="isMenu ? 'visible' : 'visible'"
              class="menu ml-8"
              tabindex="0"
            ></div>
          </div>
          <div tabindex="0">
            <img [src]="cardImg" alt="" />
          </div>
          <div class="selected ml-8">
            <img class="icon_select" alt="" src="assets/images/selected.svg" />
          </div>
          <div
            class="ml-8 progress-circle progress-circle--{{config?.progressSize}}"
            [attr.data-percentage]="progressDisplay"
          >
            <svg class="progress-circle__svg" viewport="0 0 2000 2000">
              <circle
                class="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
              <circle
                class="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
            </svg>
            <span>30%</span>
          </div>
          <div
            class="progress-circle progress-circle--sm progress-circle--success"
          >
            <img
              class="icon_progress_check"
              alt=""
              src="assets/images/completed.svg"
            />
          </div>
        </div>
      </div>`,
        copyCode2: `

       .progress-circle {
            height: 36px;
            width: 36px;
            position: relative;
          }
          .progress-circle span {
            position: absolute;
            font-size: 10px;
            font-weight: bold;
            margin: 0 auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .progress-circle__svg {
            border-radius: 50%;
            height: 100%;
            transform: scaleX(-1 rotate(-90deg));
            width: 100%;
          }
          .progress-circle__stroke {
            fill: none;
            stroke-width: 4px;
          }
          .progress-circle__stroke:nth-child(1) {
            stroke: green;
          }
          .progress-circle__stroke:nth-child(2) {
            stroke: #ddd;
            stroke-dasharray: 314.1592%;
          }
          .progress-circle--xs span {
            display: none;
          }
          .progress-circle--xs {
            height: 24px;
            width: 24px;
          }
          .progress-circle--xs .progress-circle__stroke {
            stroke-width: 4px;
          }
          .progress-circle--sm {
            height: 32px;
            width: 32px;
          }
          .progress-circle--sm .progress-circle__stroke {
            stroke-width: 8px;
          }
          .progress-circle--md {
            height: 48px;
            width: 48px;
          }
          .progress-circle--md .progress-circle__stroke {
            stroke-width: 12px;
          }
          .progress-circle--md span {
            font-size: 10px;
          }
          .progress-circle--lg {
            height: 64px;
            width: 64px;
          }
          .progress-circle--lg .progress-circle__stroke {
            stroke-width: 16px;
          }
          .progress-circle--lg span {
            font-size: 14px;
          }
          .progress-circle--xl {
            height: 72px;
            width: 72px;
          }
          .progress-circle--xl .progress-circle__stroke {
            stroke-width: 20px;
          }
          .progress-circle--xl span {
            font-size: 18px;
          }
          
          .progress-circle--xxl {
            height: 88px;
            width: 88px;
          }
          
          .progress-circle--xxl .progress-circle__stroke {
            stroke-width: 24px;
          }
          .progress-circle--xxl span {
            font-size: 20px;
          }

`,
        copyCode3: `   
         --cc-members-list-item-selected:#f2f2ea;
        --cc-members-list-item-selected-border:#e9e8d9;
        --cc-members-list-item-menu-text:#999999;
        --cc-members-list-item-status-text:#07bc81;
          --cc-members-list-item-status-br:#07bc81;
          --cc-members-list-item-status-bg:#fff;`
    }
];