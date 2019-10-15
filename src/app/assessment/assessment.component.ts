import { Component, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private renderer: Renderer2) { }

  AssessmentInstructions;
  AssessmentSubmission;
  AssessmentScore;
  AssessmentAnswers;
  AssessmentCompleted;
  AssessmentFinalReport;
  pageTitle = 'Assessment';
  AssessmentInstructionsCode =` <div class="assessment-content">
  <div class="assessment-content-title mt-32">Assessment Instructions</div>
  <div class="assessment-content-description mt-32">
    <ol class="ui list">
      <li>The assessment has to be completed before the training ends (i.e., 20 Sep 2019)</li>
      <li>This assessment can be attempted multiple times.</li>
      <li>Assessment are mandatory to complete to achieve 100% progress.</li>
      <li>Score achiveed in your last attempt will be considered as your final score.</li>
    </ol>
  </div>
  <div class="assessment-action-buttons mt-40">
    <button type="button" class="sb-btn sb-btn-primary sb-btn-normal sb-btn-responsive"> Start Assessment </button>
  </div>
</div>
`
  AssessmentSubmissionCode =` <div class="assessment-content assessment-result-content">
  <div class="assessment-content-title mt-32">Submit your assessment to check your score.</div>
  <div class="assessment-content-description mt-16">
    <div class="text-center">
      <div>Total questions: <span class="score">5</span></div>
      <div>Questions answered: <span class="score">3</span></div>
      <div>Questions skipped: <span class="score">2</span></div>
    </div>
  </div>
  <div class="assessment-action-buttons mt-40">
    <button type="button" class="sb-btn sb-btn-normal sb-btn-outline-primary sb-btn-responsive mr-24"> Go Back </button>
    <button type="submit" class="sb-btn sb-btn-primary sb-btn-normal sb-btn-responsive"> Submit </button>
  </div>
</div>
  `
  AssessmentScoreCode =` <div class="assessment-content assessment-score-content">
  <div class="assessment-content-title mt-32">You assessment score is 3/5</div>
  <div class="assessment-content-description mt-16">
    <div class="text-center">
      You can re-take the assessment to improve your score or move to
      next module to continue learning.
    </div>
  </div>
  <div class="assessment-action-buttons mt-40">
    <button class="sb-btn sb-btn-normal sb-btn-outline-primary sb-btn-responsive mr-24"> Re-take Assessment
    </button>
    <button class="sb-btn sb-btn-primary sb-btn-normal sb-btn-responsive"> Go to Next Module </button>
  </div>
  <div class="assessment-action-buttons mt-32">
  <div class="assement-view">To view answers to this assessment,
    <a href="" class="text-decoration-underline"> click here</a>
  </div>
  </div>
</div>
  `
  AssessmentAnswersCode =`<div class="assessment-content assessment-score-content">
  <div class="assessment-content-title mt-32">You assessment score is 3/5</div>
  <div class="assessment-content-description mt-16">
    <div class="text-center">
      You can re-take the assessment to improve your score or move to
      next module to continue learning.
    </div>
  </div>
  <div class="assessment-action-buttons mt-40">
    <button type="button" class="sb-btn sb-btn-normal sb-btn-outline-primary sb-btn-responsive mr-24"> Exit </button>
    <button type="button" class="sb-btn sb-btn-primary sb-btn-normal sb-btn-responsive"> Re-take Assessment </button>
  </div>
  <div class="text-center mt-32">
    <div class="assessment-result"><i class="check circle icon"></i>We'll send the answer key link to your
      registered contact details. </div>
  </div>
</div>
  `
  AssessmentCompletedCode =` <div class="assessment-content assessment-score-content">
  <div class="assessment-result-info mt-32 text-center">Congratulation! you've earned a merit certificate</div>
  <div class="assessment-content-title mt-32">You assessment score is 5/5</div>
  <div class="assessment-content-description mt-16">
    <div class="text-center">
      You will be able to view/download this certificate from your profile page once the training ends
    </div>
  </div>
  <div class="assessment-action-buttons mt-40">
    <button type="button" class="sb-btn sb-btn-normal sb-btn-outline-primary sb-btn-responsive mr-24"> Exit </button>
    <button type="button" class="sb-btn sb-btn-primary sb-btn-normal sb-btn-responsive"> Re-take Assessment </button>
  </div>
  <div class="text-center mt-32">
    <div class="assessment-result"><i class="check circle icon"></i>We'll send the answer key link to your
      registered contact details. </div>
  </div>
</div>
  `
  AssessmentFinalReportCode= ` <div class="assessment-content assessment-score-content">
  <div class="assessment-content-title mt-32">Assessment Submitted</div>
  <div class="assessment-content-description mt-16">
    <div class="text-center">You have scored 80%.
    </div>
    <div class="text-center">
      you can Re-take the assessment again or can go to next module.
    </div>
  </div>
  <div class="assessment-action-buttons mt-32">
    <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary sb-btn-responsive mr-24">View
      Assement answers</button>
    <button class="sb-btn sb-btn-primary sb-btn-normal sb-btn-responsive"> go to next module </button>
  </div>

</div>
  `
  ;


  ngOnInit() {
    this.renderer.addClass(this.document.body, 'hideLeftTopBars');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hideLeftTopBars');
  }
  
}

  