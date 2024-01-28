document.addEventListener('DOMContentLoaded', () => {
    animate1();
    animate2();
    animate3();
});

function animate1(){
    const animatedElement = document.querySelector('.animated-box');
    const triggerElement = document.getElementById('trigger');
    const buttons = document.querySelectorAll('.animated-button1');
    const texts = document.querySelectorAll('.animated-text');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedElement.classList.add('active');
                buttons.forEach(button => {
                    button.classList.add('active');
                });
                texts.forEach(text => {
                    text.classList.add('active');
                });
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(triggerElement);
};


function animate2(){
    const triggerElement2 = document.getElementById('trigger2');
    const elementsToAnimate = document.querySelectorAll('.animated-div');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementsToAnimate.forEach(element => {
                    element.classList.add('active');
                });
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(triggerElement2);
};


function animate3(){
    const triggerElement2 = document.getElementById('trigger3');
    const elementsToAnimate = document.querySelectorAll('.animated-div2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                elementsToAnimate.forEach(element => {
                    element.classList.add('active');
                });
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(triggerElement2);
};