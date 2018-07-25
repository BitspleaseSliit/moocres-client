import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SampleData {

    @Output() getLoggedIn: EventEmitter<any> = new EventEmitter();

    private coursera = 'assets/coursera-card.png';
    private futureLearn = 'assets/futureLearn.png';
    private edx = 'assets/edxLogo.png';


    public courseData = [{

        courseName: 'Algorithms, Part II',
        uniName: 'Princeton University',
        url: 'https://www.coursera.org/learn/algorithms-part2',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],

    }, {

        courseName: 'iOS App Development Basics',
        uniName: 'University of Toronto',
        url: 'https://www.coursera.org/learn/ios-app-development-basics',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    }, {

        courseName: 'Java for Android',
        uniName: 'Vanderbilt University',
        url: 'https://www.coursera.org/learn/java-for-android',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 20,
            slide: 50,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    }, {

        courseName: 'Java Programming: Solving Problems with Software',
        uniName: 'Duke University',
        url: 'https://www.coursera.org/learn/java-programming',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 60,
            slide: 20,
            code: 20,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],

    }, {

        courseName: 'Java Programming: Principles of Software Design',
        uniName: 'Duke University',
        url: 'https://www.coursera.org/learn/java-programming-design-principles',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 50,
            slide: 20,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    }, {

        courseName: 'Object Oriented Programming in Java',
        uniName: 'University of California San Diego',
        url: 'https://www.coursera.org/learn/object-oriented-java',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 10,
            slide: 30,
            code: 60,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    }, {

        courseName: 'Algorithms, Part I',
        uniName: 'Princeton University',
        url: 'https://www.coursera.org/learn/algorithms-part1',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],

    }, {

        courseName: 'Python Programming Essentials',
        uniName: 'Rice University',
        url: 'https://www.coursera.org/learn/python-programming',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 30,
            slide: 10,
            code: 60,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    }, {

        courseName: 'Python Programming: A Concise Introduction',
        uniName: 'Wesleyan University',
        url: 'https://www.coursera.org/learn/python-programming-introduction',
        logo: 'coursera',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },
    {

        courseName: 'Object Oriented Programming in Java',
        uniName: 'Microsoft Institution',
        url: 'https://www.edx.org/course/object-oriented-programming-in-java-0',
        logo: 'edx',
        videoStyle: {
            talkingHead: 30,
            slide: 10,
            code: 60,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },
    {

        courseName: 'Learn to Program in Java',
        uniName: 'Microsoft Institution',
        url: 'https://www.edx.org/course/learn-to-program-in-java-0',
        logo: 'edx',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },
    {

        courseName: 'Java Fundamentals for Android Development',
        uniName: 'GalileoX Institution',
        url: 'https://www.edx.org/course/java-fundamentals-for-android-development',
        logo: 'edx',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },
    {

        courseName: 'Introduction to Java Programming: Starting to code in Java',
        uniName: 'UC3Mx Institution',
        url: 'https://www.edx.org/course/introduction-to-java-programming-starting-to-code-with-java',
        logo: 'edx',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },
    {

        courseName: 'Introduction to Java Programming – Part 1',
        uniName: 'HKUSTx  Institution',
        url: 'https://www.edx.org/course/introduction-java-programming-part-1-hkustx-comp102-1x-4',
        logo: 'edx',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },
    {

        courseName: 'Begin Programming: Build Your First Mobile Game',
        uniName: 'Reading University',
        url: 'https://www.futurelearn.com/courses/begin-programming#section-educators',
        logo: 'futureLearn',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },
    {

        courseName: 'Object-oriented Programming in Python',
        uniName: 'Raspberry Pi Foundation',
        url: 'https://www.futurelearn.com/courses/object-oriented-principles#section-educators',
        logo: 'futureLearn',
        videoStyle: {
            talkingHead: 60,
            slide: 10,
            code: 30,
            conversations: 0
        },
        abstractTopics: ['iterations', 'functions', 'recursive'],


    },


    ];


}
