import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-cbse-program',
  templateUrl: './cbse-program.component.html',
  // styleUrls: ['./cbse-program.component.scss']
})
export class CBSEProgramComponent implements OnInit {

  constructor() { }

  



  pageTitle = 'CBSE Program';
  sections = [
    {
      expandCode: false,
      title: 'Learning Outcomes',
      demoCode: `
      <div class="sb-question-dsp-container">
      <div class="sb-question-dsp-body">
      <div class="sb-question-header question-menu d-flex sb-learning-outcome-header">
        <div class="hambergur-menu-container">
          <div class="hambergur-menu"></div>
          <div class="hambergur-menu"></div>
          <div class="hambergur-menu"></div>
        </div>
        <h4 class="m-0 px-16">Content/unit name</h4>
        <button class="sb-btn sb-btn-outline-gray sb-btn-xs ml-auto mr-8 sb-btn-arrows"><i class="chevron left icon"></i></button>
        <button class="sb-btn sb-btn-outline-gray sb-btn-xs sb-btn-arrows"><i class="chevron right icon"></i></button>
      </div>
      <div class="sb-question-content sb-learning-outcome">
        <div class="page-section question-bg">
          <h4 class="page-section-title">Learning Outcomes</h4>
          <div class="sb-question-content-learning">
            <div class="sb-question-content-card">
              <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-learning-outcome-label">
              <span class="sb-status-label mr-8 sb-bg-success sb-shape-circle"></span>
                <label> Long / short Text question and long / short text options</label>
              </div>
            </div>
            <div class="sb-question-content-card">
              <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-learning-outcome-label">
              <span class="sb-status-label mr-8 sb-bg-error sb-shape-circle"></span>
                <label> Text question with small image and image as
                  options. Big image as question and short text options with small
                  image</label>
              </div>
            </div>
            <div class="sb-question-content-card">
              <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-learning-outcome-label">
              <span class="sb-status-label mr-8 sb-bg-warning sb-shape-circle"></span>
                <label>Big image as question and short text options with small
                  image</label>
              </div>
            </div>
            <div class="sb-question-content-card">
                <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-learning-outcome-label">
                <span class="sb-status-label mr-8 sb-bg-success sb-shape-circle"></span>
                  <label> Long / short Text question and long / short text options</label>
                </div>
              </div>
              <div class="sb-question-content-card">
                <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-learning-outcome-label">
                <span class="sb-status-label mr-8 sb-bg-error sb-shape-circle"></span>
                  <label> Text question with small image and image as
                    options</label>
                </div>
              </div>
              <div class="sb-question-content-card">
                <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-learning-outcome-label">
                <span class="sb-status-label mr-8 sb-bg-warning sb-shape-circle"></span>
                  <label>Big image as question and short text options with small
                    image</label>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      `,
      copyCode: `
      `
    },
    {
      expandCode: false,
      title: 'Focus Spot',
      demoCode: `
      <div class="sb-question-dsp-container">
      <div class="sb-question-dsp-body">
        <div class="sb-question-header question-menu d-flex sb-learning-outcome-header">
          <div class="hambergur-menu-container">
            <div class="hambergur-menu"></div>
            <div class="hambergur-menu"></div>
            <div class="hambergur-menu"></div>
          </div>
          <h4 class="m-0 px-16">Content/unit name</h4>
          <button class="sb-btn sb-btn-outline-gray sb-btn-xs ml-auto mr-8 sb-btn-arrows"><i class="chevron left icon"></i></button>
          <button class="sb-btn sb-btn-outline-gray sb-btn-xs sb-btn-arrows"><i class="chevron right icon"></i></button>
        </div>
        <div class="sb-question-content sb-focus-spots">
          <div class="page-section question-bg">
            <div class="sb-question-content-focus-spot">
              <div class="d-flex sb-question-content-focus-spot-label">
                  <label class="sb-label sb-label-warning m-0 ml-auto">Severity 45</label>
              </div>
              <div class="sb-question-content-card">
                <div class="sb-question-content-focus-spot-group">
                  <div class="sb-question-content-focus-spot-extra">Hard Spot:</div>
                    <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-focus-spot-label">
                    <span class="sb-status-label mr-8 sb-bg-success sb-shape-circle"></span>
                      <label> Long / short Text question and long / short text options Long / short
                       Text question and long / short text options</label>
                    </div>
                </div>
                <div class="sb-question-content-focus-spot-group">
                    <div class="sb-question-content-focus-spot-extra">Why</div>
                      <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-focus-spot-label">
                      <span class="sb-status-label mr-8 sb-bg-success sb-shape-circle"></span>
                        <label> Long / short Text question and long / short text options</label>
                      </div>
                  </div>
                  <div class="sb-question-content-focus-spot-group">
                      <div class="sb-question-content-focus-spot-extra">Impact</div>
                        <div class="mb-0 fs-0-92 font-weight-normal d-inline-flex flex-ai-baseline sb-focus-spot-label">
                        <span class="sb-status-label mr-8 sb-bg-primary sb-shape-circle"></span>
                          <label> Long / short Text question and long / short text options</label>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
      `,
      copyCode: ``
    },
    {
      expandCode: false,
      title: 'Vertical Layout',
      demoCode: `
      <div class="sb-question-dsp-container">
      <div class="sb-question-dsp-body">
        <div class="mcq-vertical cheveron-helper">
          <div class="mcq-title">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <i class="chevron down icon"></i>
          </div>
          <div class="mcq-options">
            <div data-simple-choice-interaction="" data-response-variable="responseValue" value="0" class="mcq-option">
              <p>a sdas d</p>
            </div>
            <div data-simple-choice-interaction="" data-response-variable="responseValue" value="1" class="mcq-option">
              <p>&nbsp;asdada das</p>
            </div>
            <div data-simple-choice-interaction="" data-response-variable="responseValue" value="2" class="mcq-option">
              <p>jjkjk</p>
            </div>
            <div data-simple-choice-interaction="" data-response-variable="responseValue" value="3" class="mcq-option">
              <p>lkklkllk</p>
            </div>
          </div>
        </div>
      </div>
  </div> 
      `,
      copyCode: ``
    },
    {
      expandCode: false,
      title: 'Horizontal Layout',
      demoCode: `
      <div class="sb-question-dsp-container">
          <div class="sb-question-dsp-body">
              <div class="mcq-horizontal cheveron-helper">
                <div class="mcq-title">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               </p>
               <i class="chevron down icon"></i>
                </div>
                
                <div class="mcq-options">
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="0" class="mcq-option">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="1" class="mcq-option">
                    <p>&nbsp;asdada das</p>
                  </div>
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="2" class="mcq-option">
                    <p>jjkjk</p>
                  </div>
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="3" class="mcq-option">
                    <p>lkklkllk</p>
                  </div>
                </div>
              </div>
            </div>
    </div>
      `,
      copyCode: ``
    },
    {
      expandCode: false,
      title: 'Grid Layout',
      demoCode: `
      <div class="sb-question-dsp-container">
      <div class="sb-question-dsp-body">
          <div class="mcq-grid cheveron-helper">
            <div class="mcq-title">
              <p>sa das d</p>
            <i class="chevron down icon"></i>
            </div>
            <div class="mcq-options">
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="0" class="mcq-option">
                <p>a sdas d</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="1" class="mcq-option">
                <p>&nbsp;asdada das</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="2" class="mcq-option">
                <p>jjkjk</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="3" class="mcq-option">
                <p>lkklkllk</p>
              </div>
            </div>
          </div>
        </div>
</div>
      `,
      copyCode: ``
    },
    {
      expandCode: false,
      title: 'Vertical Split Layout',
      demoCode: `
      <div class="sb-question-dsp-container">
      <div class="sb-question-dsp-body">
          <div class="mcq-vertical mcq-split cheveron-helper">
            <div class="mcq-title">
              <p>sa das d</p>
            <i class="chevron down icon"></i>
            </div>
            <div class="mcq-options">
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="0" class="mcq-option">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="1" class="mcq-option">
                <p>&nbsp;asdada das</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="2" class="mcq-option">
                <p>jjkjk</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="3" class="mcq-option">
                <p>lkklkllk</p>
              </div>
            </div>
          </div>
        </div>
</div>
      `,
      copyCode: ``
    },
    {
      expandCode: false,
      title: 'Horizonatl Split Layout',
      demoCode: `
      <div class="sb-question-dsp-container">
      <div class="sb-question-dsp-body">
          <div class="mcq-horizontal mcq-split cheveron-helper">
            <div class="mcq-title">
              <p>sa das d</p>
              <i class="chevron down icon"></i>
            </div>
            <div class="mcq-options">
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="0" class="mcq-option">
                <p>a sdas d</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="1" class="mcq-option">
                <p>&nbsp;asdada das</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="2" class="mcq-option">
                <p>jjkjk</p>
              </div>
              <div data-simple-choice-interaction="" data-response-variable="responseValue" value="3" class="mcq-option">
                <p>lkklkllk</p>
              </div>
            </div>
          </div>
        </div>
  </div>
      `,
      copyCode: ``
    },
    {
      expandCode: false,
      title: 'Grid Split Layout',
      demoCode: `
      <div class="sb-question-dsp-container">
          <div class="sb-question-dsp-body">
              <div class="mcq-grid mcq-split cheveron-helper">
                <div class="mcq-title">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <i class="chevron down icon"></i>
                </div>
                <div class="mcq-options">
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="0" class="mcq-option">
                    <p>a sdas d</p>
                  </div>
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="1" class="mcq-option">
                    <p>&nbsp;asdada das</p>
                  </div>
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="2" class="mcq-option">
                    <p>jjkjk</p>
                  </div>
                  <div data-simple-choice-interaction="" data-response-variable="responseValue" value="3" class="mcq-option">
                    <p>lkklkllk</p>
                  </div>
                </div>
              </div>
            </div>
      </div> 
      `,
      copyCode: ``
    },
    {
      expandCode: false,
      title: 'Questions Layout',
      demoCode: `
      <div class="ui twelve column grid p-0 m-0">
      <div class="three wide column p-0 pr-16">
     <div class="ui questionsMenu">
       <button class="sb-btn sb-btn-primary sb-btn-normal width-100">Create</button>
       <div class="ui vertical segments" style="max-height:50vh;overflow-y:auto;">
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 1</label>
             </div>
             <span class="sb-status-label sb-bg-success sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 2</label>
             </div>
             <span class="sb-status-label sb-bg-warning sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 3</label>
             </div>
             <span class="sb-status-label sb-bg-error sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 4</label>
             </div>
             <span class="sb-status-label sb-bg-warning sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 5</label>
             </div>
             <span class="sb-status-label sb-bg-success sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 6</label>
             </div>
             <span class="sb-status-label sb-bg-success sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 7</label>
             </div>
             <span class="sb-status-label sb-bg-success sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 8</label>
             </div>
             <span class="sb-status-label sb-bg-error sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 9</label>
             </div>
             <span class="sb-status-label sb-bg-success sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 10</label>
             </div>
             <span class="sb-status-label sb-bg-warning sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 11</label>
             </div>
             <span class="sb-status-label sb-bg-error sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 12</label>
             </div>
             <span class="sb-status-label sb-bg-warning sb-shape-circle ml-auto"></span>
           </div>
         </div>
         <div class="questionTab ui header aligned segment p-8">
           <div class="item d-flex flex-ai-center cursor-pointer">
             <div>
               <label class="mb-0 fs-0-92 font-weight-normal" for="check1"> Question 13</label>
             </div>
             <span class="sb-status-label sb-bg-success sb-shape-circle ml-auto"></span>
           </div>
         </div>
       </div>
     </div>
   </div>
     <div class="nine wide column bg-white p-0">
        <div class="sb-question-dsp-container quml-responsive-div">
            <div class="sb-question-dsp-body">
                <div class="mcq-vertical cheveron-helper">
                  <div class="mcq-title">
                    <p>sa das d</p>
                    <i class="chevron down icon"></i>
                  </div>
                  <div class="mcq-options">
                    <div data-simple-choice-interaction="" data-response-variable="responseValue" value="0"
                      class="mcq-option">
                      <p>a sdas d</p>
                    </div>
                    <div data-simple-choice-interaction="" data-response-variable="responseValue" value="1"
                      class="mcq-option">
                      <p>&nbsp;asdada das</p>
                    </div>
                    <div data-simple-choice-interaction="" data-response-variable="responseValue" value="2"
                      class="mcq-option">
                      <p>jjkjk</p>
                    </div>
                    <div data-simple-choice-interaction="" data-response-variable="responseValue" value="3"
                      class="mcq-option">
                      <p>lkklkllk</p>
                    </div>
                  </div>
                </div>
              </div>
         </div>
     </div>
   </div> 
      `,
      copyCode: ``
    }
  ];


  // for style guide
  // @HostListener('click') onClick() {
  //   this.toogleGuru('mcq-title', 'expand');
  //   this.toogleGuru('chevron', 'icon-active');
  // }

  // toogleGuru(target, classtobeadded) {
  //   const k = document.getElementsByClassName(target)[0];
  //   if (k.classList) {
  //     k.classList.toggle(classtobeadded);
  //   }
  // }

  ngOnInit() {
    $(document).on('click', '.cheveron-helper .chevron', (e) => {
      $('.mcq-title').toggleClass('expand');
      $(e.target).toggleClass('icon-active');
      console.log('icon', e.target);
      $(this).off('click');
    });
  }

}
