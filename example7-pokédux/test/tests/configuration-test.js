import React from "react";
import {expect} from "chai";
import {shallow, mount, render} from "enzyme";
import {App, PokeRouter} from "../../app/js/components/configuration";

describe('Configuration test suite,', () => {
    it('should create an App with two link', () => {
        var app = mount(<App location={{pathname: '/'}}/>);
        expect(app.find('a')).to.have.length(2);
    });

    it('should App has class is-active on / when pathname is /', () => {
        var app = mount(<App location={{pathname: '/'}}/>);
        expect(app.find('a.is-active').text()).to.equal('List of Pokemon');
    });

    it('should App has class is-active on /type when pathname is /type', () => {
        var app = mount(<App location={{pathname: '/type'}}/>);
        expect(app.find('a.is-active').text()).to.equal('Type of Pokemon');
    });

    it('should mount router', () => {
        var pokeRouter = mount(PokeRouter);
        expect(pokeRouter.find('nav.nav')).to.have.length(1);
    });

    it('should route to 404', () => {
        var pokeRouter = mount(PokeRouter);
        expect(pokeRouter.text()).to.contains('Nothing to see here !')
    });
});