import React from 'react';

import { fetchCat } from '../api';

import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Container } from '../components/Container';
import { Image } from '../components/Image';

export const Home = () => {
  const [form, setForm] = React.useState({
    enable: false,
    refresh: false,
  });
  const [currentCat, setCurrentCat] = React.useState();
  const timeoutRef = React.useRef();

  // toggle form parametr
  // take event, which takes place in the DOM
  // sets a new value of the form based on the previous value,
  // toggle the parameter on which the event occurred
  // link of this function will be changed, if changed function setForm
  const toggle = React.useCallback(
    (event) => {
      setForm((prev) => ({ ...prev, [event.target.name]: !prev[event.target.name] }));
    },
    [setForm],
  );

  // calls a function to get a cat from the server
  // and sets it to state of the current cat
  // link of this function will be changed, if changed function setCurrentCat
  const getCat = React.useCallback(async () => {
    try {
      const cat = await fetchCat();
      setCurrentCat(cat);
    } catch (e) {
      getCat();
    }
  }, [setCurrentCat]);

  // every tick get a new cat and recursively create the timeout, which will be called after 5 second
  // link of this function will be changed, if changed function getCat
  const tick = React.useCallback(() => {
    getCat();
    timeoutRef.current = setTimeout(() => tick(), 5000);
  }, [getCat]);

  // if a user has turned on the display of the image and automatic update
  // create the timeout that calls the tick function as soon as possible
  // else clear the timeout
  // when component will unmount, calling function for clear timeout
  // this useEffect will be called when the value of the form or the getCat function or the tick function changes
  React.useEffect(() => {
    form.refresh && form.enable
      ? (timeoutRef.current = setTimeout(() => tick(), 0))
      : clearTimeout(timeoutRef.current);
    return () => clearTimeout(timeoutRef.current);
  }, [form, getCat, tick]);

  return (
    <Container>
      <Checkbox
        id="enable"
        name="enable"
        label="Enable"
        type="checkbox"
        checked={form.enable}
        onChange={toggle}
      />
      {/* if image display is off, checkbox is disabled */}
      <Checkbox
        id="refresh"
        name="refresh"
        label="Auto-refresh every 5 second"
        disabled={!form.enable}
        type="checkbox"
        checked={form.refresh}
        onChange={toggle}
      />
      {/* if image display is off, button is disabled */}
      <Button disabled={!form.enable} onClick={getCat}>
        Get cat!
      </Button>
      {/* if image display is on, the currentCat is not undefined, the image is displayed */}
      {form.enable && currentCat && <Image alt="cat" src={currentCat.url} />}
    </Container>
  );
};
