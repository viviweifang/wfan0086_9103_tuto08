# wfan0086_9103_tuto08

# Creative coding major project 

Interactive method of the work
* First, when you click the mouse, the speed of the four large circles is randomised within a preset range. Second, by clicking the mouse, you can directly affect the rhythm and dynamics of the animation, making the animation more random and unpredictable.
* Time-based animation, the animation is controlled by the time [mills] function . During the set animation duration, the large circle and the small ball will continue to move. Once this time is exceeded, the animation will enter a pause state, and then start moving again after the set pause time. This time control mechanism allows the animation to periodically show different states: movement and stillness alternate, increasing the rhythm and changes of the animation.
* The position and speed of the small ball are randomly set at initialisation. Each small ball moves randomly within the canvas and bounces when encountering a boundary, making the movement trajectory of the small ball unpredictable, enhancing the dynamics of the animation. In addition, the position of the large circle is calculated by the sine and cosine functions according to the time variable, so that it presents a regular oscillating motion. The large circle contains multiple layers of concentric circles, each layer has a different colour, forming a rich visual hierarchy.

Personal Approach to Animating the Code
I chose to drive my code with time. The animation is mainly created through time-based control and interactive elements to create a visually engaging and dynamic experience. The animation includes multiple moving small balls and large circles with concentric rings, where the movements of the small balls and the oscillations of the large circles are influenced by user interactions and time functions.
* The position of the large circle are calculated using trigonometric functions (sin and cos) that depend on time variables (time1, time2, time3, time4).
* Both the balls and the large circle are initialised with random positions and speeds, and the colour of the balls is also randomised to enhance visual diversity.
* Interactive speed changes can change the speed of the large circle by clicking the mouse.
* Controlled by tracking the elapsed time using the mills function. After the set animation duration, the movement stops for a while and then restarts, adding a rhythmic change to the visual experience.
