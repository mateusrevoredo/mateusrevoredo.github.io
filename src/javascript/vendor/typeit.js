/**
 * @fileoverview TypeIt
 * @link https://typeitjs.com/
 */

import TypeIt from "typeit";

let initialText = jQuery(".typeit").text();

new TypeIt(".typeit", {
	speed: 50,
	startDelay: 1200,
	lifeLike: true,
	startDelete: true,
	waitUntilVisible: true,
	loop: true
  })
  	.delete(17)
	.type("am a software engineer")
	.move(-7, {delay: 100})
	.delete(1)
	.type('E')
	.move(-9, {delay: 100})
	.delete(1)
	.type('S')
	.move('END', {delay: 1200})
	.type(" with DevOps skills", {delay: 1000})
	.delete()
	.type("like to build things", {delay: 1000})
	.move(-12, {delay: 100})
	.type('re', {delay: 800})
	.move(5, {speed: 25, delay: 200})
	.delete(7, {speed: 40})
	.type('break', {delay: 800})
	.delete(5, {speed: 40})
	.type('hack', {delay: 800})
	.delete(4, {speed: 40})
	.type('script', {delay: 800})
	.delete(6, {speed: 40})
	.type('automate', {delay: 800})
	.move('END')
	.type(' with code', {delay: 1800})
	.delete()
	.type(initialText, {delay: 1200})
	.go();