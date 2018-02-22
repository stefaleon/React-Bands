## react-bands

&nbsp;
## 00 Initial Setup

* Globally install *create-react-app*.

```
$ npm install -g create-react-app
```

* Start the react project.

```
$ create-react-app react-bands

...
Success! Created react-bands at ~\react-bands
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
```

&nbsp;
## 01 Add the Band component

* Create *Band.js*, import and display it in *App*.


&nbsp;
## 02 Pass props

* Pass the band name and members as props from App to Band.

&nbsp;
## 03 More props

* Pass image and story.


&nbsp;
## 04 Style

* Edit the card style and add the 'Lato' font.


&nbsp;
## 05 MemberList and Default Props

* Move members to a separate component and use defaultProps.



&nbsp;
## 06 Navbar

* Add a Navbar component.



&nbsp;
## 07 BandList

* Add a BandList component and render it in App. Add more bands via defaultProps.




&nbsp;
## 08 State

* Add the constructor and copy the initial state bands data from the defaultProps. Now the sample data is passed to BandList as props from the initial state.


&nbsp;
## 09 IDs

* Add an id property to each band and use it as key in the map function instead of the array index which may be changing, for example when we delete a band.
Also add the nextBandId state component.
