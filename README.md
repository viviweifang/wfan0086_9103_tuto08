# wfan0086_9103_tuto08

# Creative coding major project 

Interactive method of the work
First, when you click the mouse, the speed of the four large circles is randomised within a preset range. Second, by clicking the mouse, you can directly affect the rhythm and dynamics of the animation, making the animation more random and unpredictable.
* Time-based animation, the animation is controlled by the time [mills] function . During the set animation duration, the large circle and the small ball will continue to move. 
* The position and speed of the small ball are randomly set at initialisation. Each small ball moves randomly within the canvas and bounces when encountering a boundary.
* The position of the large circle is calculated by the sine and cosine functions according to the time variable, so that it presents a regular oscillating motion. 

Personal Approach to Animating the Code
I chose to drive my code with time. The animation is mainly created through time-based control and interactive elements to create a visually engaging and dynamic experience. 
* The position of the large circle are calculated using trigonometric functions (sin and cos) that depend on time variables (time1, time2, time3, time4).
* Both the balls and the large circle are initialised with random positions and speeds, and the colour of the balls is also randomised to enhance visual diversity.
* Interactive speed changes can change the speed of the large circle by clicking the mouse.
* Controlled by tracking the elapsed time using the mills function. After the set animation duration, the movement stops for a while and then restarts, adding a rhythmic change to the visual experience.

Source of Inspiration
The rotation of the gear system is also a rhythmic and regular movement, and this regularity and repetitive movement is inspired.
the rotation of the gear system
![An image of the rotation of the gear system](<the rotation of the gear system 1.png>)Links to an external site.
![An image of the rotation of the gear system](<the rotation of the gear system 2.png>)Links to an external site.