# Prototype Body Shop
## Implement the following

The idea of this lab is to get you comfortable with writing and implementing prototypes. We will also review testing in the lab.

# Cars

We need a prototype for a car can you help us with your sweet javascript skills?

### Phase I

Our car should have the following:

* make
* model
* year
* state
* color
* previous_owners
* current_owner

As a default a `new Car` should have the following values:
* previous_owners should be an empty array, `[]`.
* current_owner: should be `manufacturer`.
* `state` should be `off`.

We should also be able to do the following with our car.

*  `Car#sale`, we should be able to sale a car to someone, which should update the `current_owner` and `previous_owners` array.

* `Car#paint`, which should take a new color and update the color of the car to be new color.


## Phase II

Implement and test the following methods:

* `Car#start` should change the state of the car to `on`.
* `Car#off` should change the state to `off`.
* `Car#driveTo`, it should `console.log` `"driving to <destination>"`, but only if the car `state` is `on`. *Note: this method needs to take a `destination` param.*
* `Car#park` only if the car is `off` and if it's off console.log `parked!!`.


## Phase III 

Add the following property to the constructor:

* `passengers`

it should default to an empty array.

Implement the following methods:

* `Car#pick_up` should take a `name` and `console.log` that you are `"driving to 'pick up <friend>'"`, but only if the `car` is `on`. It should also update the `passangers` array to include the new passanger.
* `Car#dropOff` it should take a `name` and remove them from the `passangers` array, but only if they are in the array. It should also only drop them off if the car is `on`.


  





