import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";
import { DOCUMENT } from '@angular/platform-browser';



@Component({
    selector: "app-test-page",
    templateUrl: "./test-page.component.html"
})
export class TestPageComponent implements OnInit {


    //public fixed: boolean = true;
    constructor(@Inject(DOCUMENT) private doc: Document) { }

    pageTitle = "Test Page";
    // sections = [
    //     {
    //         expandCode: false,
    //         title: "Meta Data List",
    //         demoCode: `
    //   <dl class="sb-meta-data sb-meta-d1">
    //     <dt>Title</dt>
    //     <dd>SNF Chapter 1 Kalrav Hindi</dd>
    //     <dt>aklsdjflsd lfsldjflsakfljslkdfjlksdjflks fljalskdfjl;asdfjlsdjf;l</dt>
    //     <dd>SNF Chapter 1 Kalrav Hindi</dd>
    //   </dl>
    //   `,
    //         copyCode: `
    //   <dl class="sb-meta-data sb-meta-d1">
    //   <dt>Title</dt>
    //   <dd>SNF Chapter 1 Kalrav Hindi</dd>
    //   <dt>aklsdjflsd lfsldjflsakfljslkdfjlksdjflks fljalskdfjl;asdfjlsdjf;l</dt>
    //   <dd>SNF Chapter 1 Kalrav Hindi</dd>
    // </dl>
    //   `
    //     }
    // ];



    ngOnInit() {


        var socialFloat = <HTMLElement>document.querySelector('#sb-fix-bottom');
        var footer = <HTMLElement>document.querySelector('#footer');
        console.log('checking footer offsetheight' + socialFloat.offsetHeight);
        function checkOffset() {
            function getRectTop(el) {
                var rect = el.getBoundingClientRect();
                return rect.top;
            }
 
            if ((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
                socialFloat.style.position = 'relative';
            if (document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
                socialFloat.style.position = 'fixed'; // restore when you scroll up

            // socialFloat.innerHTML = document.body.scrollTop + window.innerHeight;
        }

        document.addEventListener("scroll", function () {
            checkOffset();
        });


    }





}
