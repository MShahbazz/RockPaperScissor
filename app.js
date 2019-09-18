
        //intro screen fadeout and section fadein
        var lplay = document.querySelector(".intro button");
        var intro = document.querySelector(".intro");
        var section = document.querySelector("section");

        lplay.addEventListener("click", function () {

            intro.classList.add("fadeOut");
            section.classList.add("fadein");

        }



        )



        let pScore = 0;
        let cScore = 0;

        var phands = document.querySelector(".pimage");
        var chands = document.querySelector(".cimage");
        var chc = document.querySelectorAll(".choice button");
        var hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";

            });

        });
        // var popt = ["rock", "paper", "scissor"];
        var copt = ["rock", "paper", "scissor"];

        chc.forEach(options =>
            options.addEventListener("click", function () {
                const ran = Math.floor(Math.random() * 3);
                const computerRandom = copt[ran];
                console.log(computerRandom);

                setTimeout(() => {
                    compareHands(this.textContent, computerRandom);
                    //Update 
                    phands.src = `./assets/${this.textContent}.png`;
                    chands.src = `./assets/${computerRandom}.png`;
                }, 2000);

                phands.style.animation = "shakeplayer 2s ease";
                chands.style.animation = "computershake 2s ease";

            }
            ));



        const compareHands = (popt, computerRandom) => {
            console.log("we are in function");
            //Update Text
            const winner = document.querySelector(".content");
            //Checking for a tie
            if (popt === computerRandom) {
                console.log("Its a tie");

                winner.textContent = "It's a tie";
                return;
            }
            //Check for Rock 
            if (popt === "rock") {
                if (computerRandom === "scissor") {
                    console.log("Player Wins");

                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;

                } else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }
            //Check for Paper
            if (popt === "paper") {
                if (computerRandom === "scissor") {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                }
            }
            //Check for Scissors
            if (popt === "scissor") {
                if (computerRandom === "rock") {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                }
            }
        }


        function updateScore() {
            var Pscore = document.querySelector(".pscore");
            Pscore.textContent = pScore;

            var Cscore = document.querySelector(".cscore");
            Cscore.textContent = cScore;
        }



// var a = function random(){


//     return computerRandom;
// }    