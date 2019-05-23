export const builtInButtons = {
    cancel: {
        classes: 'shepherd-button-secondary cancel-button',
        text: 'Exit',
        type: 'cancel'
    },
    next: {
        classes: 'shepherd-button-primary next-button',
        text: 'Next',
        type: 'next'
    },
    back: {
        classes: 'shepherd-button-primary back-button',
        text: 'Back',
        type: 'back'
    }
};

export const defaultStepOptions = {
    scrollTo: true,
    showCancelLink: false,
    modal: true,
    highlightClass: 'highlight',
    classes: 'shadow-md bg-purple-dark',

    tippyOptions: {
        duration: 500,
    },

};


export const steps = [
    {
        id: 'intro',
        useModalOverlay: true,
        options: {
            attachTo: '.tour-1 bottom',
            buttons: [
                builtInButtons.next
            ],
            classes: 'custom-class-name-1 custom-class-name-2',
            text: [
                `
            <h1>Course</h1>
          `,
                `
           This is Course page
          `
            ],
        }
    },
    {
        id: 'Library',
        useModalOverlay: true,
        options: {
            attachTo: '.tour-2 bottom',
            buttons: [
                builtInButtons.back,
                builtInButtons.next            ],
            classes: 'custom-class-name-1 custom-class-name-2',
            text: [
                `
            <h1>Library</h1>
          `,
                `
           This is Library page
          `
            ],
        }
    },
    {
        id: 'Enter QR Code',
        useModalOverlay: true,
        options: {
            attachTo: '.tour-3 bottom',
            buttons: [
                builtInButtons.back,
                builtInButtons.next
            ],
            classes: 'custom-class-name-1 custom-class-name-2',
            text: [
                `
            <h1>Enter QR Code</h1>
          `,
                `
           Enter QR code view this page
          `
            ],
        }
    },
    {
        id: 'This is search section',
        useModalOverlay: true,
        options: {
            attachTo: '.tour-4 bottom',
            buttons: [
                builtInButtons.back,
                builtInButtons.next,
            ],
            classes: 'custom-class-name-1 custom-class-name-2',
            text: [
                `
            <h1>This is search section</h1>
          `,
                `
                This is search section where you can search for course and library
          `
            ],
        }
    },

    {
        id: 'This is Language selection dropdown',
        useModalOverlay: true,
        options: {
            attachTo: '.tour-5 bottom',
            buttons: [
                builtInButtons.back,
                builtInButtons.cancel
            ],
            classes: 'custom-class-name-1 custom-class-name-2',
            text: [
                `
            <h1>This is Language selection dropdown</h1>
          `,
                `
                This is Language selection dropdown where you select the your langauge.
          `
            ],
        }
    },
];
