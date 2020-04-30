/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as t from "./typeDefs"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
    time<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Time";
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "DateTime";
    JSON<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "JSON";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    time<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Time";
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    JSON<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AddStudentsToCourseInput: { // input type
    course: string; // String!
    studentUserName: string; // String!
  }
  AssignEssayInput: { // input type
    assignedCourse: string; // String!
    dueDate: any; // Date!
    hasAssigner: string; // String!
    markingPeriod: NexusGenEnums['MarkingPeriodEnum']; // MarkingPeriodEnum!
    maxPoints: number; // Int!
    readings: NexusGenInputs['ReadingsInput']; // ReadingsInput!
    topic: NexusGenInputs['TopicInput']; // TopicInput!
  }
  CreateCourseInput: { // input type
    period: string; // String!
    taughtBy: string; // String!
  }
  FindEssayByIdInput: { // input type
    _id: string; // ID!
  }
  FindEssaysByUserNameAndMarkingPeriodInput: { // input type
    markingPeriod: NexusGenEnums['MarkingPeriodEnum']; // MarkingPeriodEnum!
    userName: string; // String!
  }
  HasAssigner: { // input type
    assignerUserName?: string | null; // String
  }
  HasOwnerInput: { // input type
    ownerUserName?: string | null; // String
  }
  LoginInput: { // input type
    password: string; // String!
    userName: string; // String!
  }
  ReadingsInput: { // input type
    readingPages: string; // String!
    readingSections: string; // String!
  }
  StudentRegistrationInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
    userName: string; // String!
  }
  SubmittedFinalDraftsInput: { // input type
    comments?: string[] | null; // [String!]
    draft?: any | null; // JSON
    gradingDraft?: any | null; // JSON
    score?: number | null; // Int
  }
  TeacherRegistrationInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
    title: NexusGenEnums['TitleEnum']; // TitleEnum!
    userName: string; // String!
  }
  TopicInput: { // input type
    question: string; // String!
    questionType: NexusGenEnums['QuestionTypeEnum']; // QuestionTypeEnum!
  }
  UpdateWorkingDraftInput: { // input type
    _id: string; // ID!
    updatedDraft: any; // JSON!
  }
}

export interface NexusGenEnums {
  MarkingPeriodEnum: "FIRST" | "FOURTH" | "SECOND" | "THIRD"
  QuestionTypeEnum: "HOW_CAUSE_EFFECT" | "HOW_PROBLEM_SOLUTION" | "WHY_CAUSE_EFFECT"
  TitleEnum: "MISS" | "MR" | "MRS" | "MS"
}

export interface NexusGenRootTypes {
  AddStudentsToCoursePayload: { // root type
    course: NexusGenRootTypes['Course']; // Course!
  }
  AssignEssayPayload: { // root type
    essay: NexusGenRootTypes['Essay'][]; // [Essay!]!
  }
  Course: { // root type
    _id?: string | null; // ID
    hasStudents: NexusGenRootTypes['Student'][]; // [Student!]!
    hasTeacher: NexusGenRootTypes['Teacher']; // Teacher!
    period: string; // String!
  }
  CreateCoursePayload: { // root type
    course: NexusGenRootTypes['Course']; // Course!
  }
  Essay: { // root type
    _id?: string | null; // ID
    assignedDate: any; // Date!
    dueDate: any; // Date!
    exempt: boolean; // Boolean!
    finalDraft?: NexusGenRootTypes['FinalDraftContainer'] | null; // FinalDraftContainer
    hasAssigner: NexusGenRootTypes['Teacher']; // Teacher!
    hasOwner: NexusGenRootTypes['Student']; // Student!
    late: boolean; // Boolean!
    markingPeriod: string; // String!
    readings: NexusGenRootTypes['Readings']; // Readings!
    score: NexusGenRootTypes['Score']; // Score!
    topic: NexusGenRootTypes['Topic']; // Topic!
    workingDraft: NexusGenRootTypes['WorkingDraft']; // WorkingDraft!
  }
  FinalDraftContainer: { // root type
    returned: boolean; // Boolean!
    submitted: boolean; // Boolean!
    submittedFinalDraft: NexusGenRootTypes['SubmittedFinalDraft']; // SubmittedFinalDraft!
    submitTime?: any | null; // DateTime
  }
  FindEssayByIdPayload: { // root type
    essay: NexusGenRootTypes['Essay']; // Essay!
  }
  FindEssaysByUserNameAndMarkingPeriodPayload: { // root type
    essay?: NexusGenRootTypes['Essay'][] | null; // [Essay!]
  }
  LoginPayload: { // root type
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: {};
  Query: {};
  Reading_Guide: { // root type
    _id?: string | null; // ID
    assignedDate: any; // Date!
    completion: string; // String!
    dueDate: any; // Date!
    exempt: boolean; // Boolean!
    hasAssigner: NexusGenRootTypes['Teacher']; // Teacher!
    hasOwner: NexusGenRootTypes['Student']; // Student!
    late: boolean; // Boolean!
    markingPeriod: string; // String!
    readings: NexusGenRootTypes['Readings']; // Readings!
    score: NexusGenRootTypes['Score']; // Score!
  }
  Readings: { // root type
    readingPages: string; // String!
    readingSections: string; // String!
  }
  Score: { // root type
    earnedPoints: number; // Int!
    maxPoints: number; // Int!
  }
  Student: { // root type
    _id?: string | null; // ID
    email?: string | null; // String
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
    userName: string; // String!
  }
  StudentRegistrationPayload: { // root type
    student: NexusGenRootTypes['Student']; // Student!
  }
  SubmittedFinalDraft: { // root type
    comments: string[]; // [String!]!
    draft: any; // JSON!
    gradingDraft: any; // JSON!
    score: number; // Int!
  }
  Teacher: { // root type
    _id?: string | null; // ID
    email?: string | null; // String
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
    title: NexusGenEnums['TitleEnum']; // TitleEnum!
    userName: string; // String!
  }
  TeacherRegistrationPayload: { // root type
    teacher: NexusGenRootTypes['Teacher']; // Teacher!
  }
  Test: { // root type
    _id?: string | null; // ID
    assignedDate: any; // Date!
    dueDate: any; // Date!
    exempt: boolean; // Boolean!
    hasAssigner: NexusGenRootTypes['Teacher']; // Teacher!
    hasOwner: NexusGenRootTypes['Student']; // Student!
    late: boolean; // Boolean!
    markingPeriod: string; // String!
    readings: NexusGenRootTypes['Readings']; // Readings!
    score: NexusGenRootTypes['Score']; // Score!
    testName: string; // String!
  }
  Topic: { // root type
    question: string; // String!
    questionType: NexusGenEnums['QuestionTypeEnum']; // QuestionTypeEnum!
  }
  UpdateWorkingDraftPayload: { // root type
    essay: NexusGenRootTypes['Essay']; // Essay!
  }
  WorkingDraft: { // root type
    draft: any; // JSON!
  }
  Assignment: NexusGenRootTypes['Essay'] | NexusGenRootTypes['Reading_Guide'] | NexusGenRootTypes['Test'];
  User: NexusGenRootTypes['Student'] | NexusGenRootTypes['Teacher'];
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: Date;
  DateTime: DateTime;
  JSON: JSON;
  Time: Time;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  AddStudentsToCourseInput: NexusGenInputs['AddStudentsToCourseInput'];
  AssignEssayInput: NexusGenInputs['AssignEssayInput'];
  CreateCourseInput: NexusGenInputs['CreateCourseInput'];
  FindEssayByIdInput: NexusGenInputs['FindEssayByIdInput'];
  FindEssaysByUserNameAndMarkingPeriodInput: NexusGenInputs['FindEssaysByUserNameAndMarkingPeriodInput'];
  HasAssigner: NexusGenInputs['HasAssigner'];
  HasOwnerInput: NexusGenInputs['HasOwnerInput'];
  LoginInput: NexusGenInputs['LoginInput'];
  ReadingsInput: NexusGenInputs['ReadingsInput'];
  StudentRegistrationInput: NexusGenInputs['StudentRegistrationInput'];
  SubmittedFinalDraftsInput: NexusGenInputs['SubmittedFinalDraftsInput'];
  TeacherRegistrationInput: NexusGenInputs['TeacherRegistrationInput'];
  TopicInput: NexusGenInputs['TopicInput'];
  UpdateWorkingDraftInput: NexusGenInputs['UpdateWorkingDraftInput'];
  MarkingPeriodEnum: NexusGenEnums['MarkingPeriodEnum'];
  QuestionTypeEnum: NexusGenEnums['QuestionTypeEnum'];
  TitleEnum: NexusGenEnums['TitleEnum'];
}

export interface NexusGenFieldTypes {
  AddStudentsToCoursePayload: { // field return type
    course: NexusGenRootTypes['Course']; // Course!
  }
  AssignEssayPayload: { // field return type
    essay: NexusGenRootTypes['Essay'][]; // [Essay!]!
  }
  Course: { // field return type
    _id: string | null; // ID
    hasStudents: NexusGenRootTypes['Student'][]; // [Student!]!
    hasTeacher: NexusGenRootTypes['Teacher']; // Teacher!
    period: string; // String!
  }
  CreateCoursePayload: { // field return type
    course: NexusGenRootTypes['Course']; // Course!
  }
  Essay: { // field return type
    _id: string | null; // ID
    assignedDate: any; // Date!
    dueDate: any; // Date!
    exempt: boolean; // Boolean!
    finalDraft: NexusGenRootTypes['FinalDraftContainer'] | null; // FinalDraftContainer
    hasAssigner: NexusGenRootTypes['Teacher']; // Teacher!
    hasOwner: NexusGenRootTypes['Student']; // Student!
    late: boolean; // Boolean!
    markingPeriod: string; // String!
    readings: NexusGenRootTypes['Readings']; // Readings!
    score: NexusGenRootTypes['Score']; // Score!
    topic: NexusGenRootTypes['Topic']; // Topic!
    workingDraft: NexusGenRootTypes['WorkingDraft']; // WorkingDraft!
  }
  FinalDraftContainer: { // field return type
    returned: boolean; // Boolean!
    submitted: boolean; // Boolean!
    submittedFinalDraft: NexusGenRootTypes['SubmittedFinalDraft']; // SubmittedFinalDraft!
    submitTime: any | null; // DateTime
  }
  FindEssayByIdPayload: { // field return type
    essay: NexusGenRootTypes['Essay']; // Essay!
  }
  FindEssaysByUserNameAndMarkingPeriodPayload: { // field return type
    essay: NexusGenRootTypes['Essay'][] | null; // [Essay!]
  }
  LoginPayload: { // field return type
    user: NexusGenRootTypes['User']; // User!
  }
  Mutation: { // field return type
    addStudentsToCourse: NexusGenRootTypes['AddStudentsToCoursePayload']; // AddStudentsToCoursePayload!
    assignEssay: NexusGenRootTypes['AssignEssayPayload']; // AssignEssayPayload!
    createCourse: NexusGenRootTypes['CreateCoursePayload']; // CreateCoursePayload!
    login: NexusGenRootTypes['LoginPayload']; // LoginPayload!
    logout: boolean; // Boolean!
    studentRegistration: NexusGenRootTypes['StudentRegistrationPayload']; // StudentRegistrationPayload!
    teacherRegistration: NexusGenRootTypes['TeacherRegistrationPayload']; // TeacherRegistrationPayload!
    updateWorkingDraft: NexusGenRootTypes['UpdateWorkingDraftPayload']; // UpdateWorkingDraftPayload!
  }
  Query: { // field return type
    findEssayById: NexusGenRootTypes['FindEssayByIdPayload']; // FindEssayByIdPayload!
    findEssaysByUserNameAndMarkingPeriod: NexusGenRootTypes['FindEssaysByUserNameAndMarkingPeriodPayload']; // FindEssaysByUserNameAndMarkingPeriodPayload!
    me: NexusGenRootTypes['User'] | null; // User
  }
  Reading_Guide: { // field return type
    _id: string | null; // ID
    assignedDate: any; // Date!
    completion: string; // String!
    dueDate: any; // Date!
    exempt: boolean; // Boolean!
    hasAssigner: NexusGenRootTypes['Teacher']; // Teacher!
    hasOwner: NexusGenRootTypes['Student']; // Student!
    late: boolean; // Boolean!
    markingPeriod: string; // String!
    readings: NexusGenRootTypes['Readings']; // Readings!
    score: NexusGenRootTypes['Score']; // Score!
  }
  Readings: { // field return type
    readingPages: string; // String!
    readingSections: string; // String!
  }
  Score: { // field return type
    earnedPoints: number; // Int!
    maxPoints: number; // Int!
  }
  Student: { // field return type
    _id: string | null; // ID
    email: string | null; // String
    firstName: string; // String!
    hasAssignments: NexusGenRootTypes['Assignment'][]; // [Assignment!]!
    inCourses: NexusGenRootTypes['Course'][]; // [Course!]!
    lastName: string; // String!
    password: string; // String!
    userName: string; // String!
  }
  StudentRegistrationPayload: { // field return type
    student: NexusGenRootTypes['Student']; // Student!
  }
  SubmittedFinalDraft: { // field return type
    comments: string[]; // [String!]!
    draft: any; // JSON!
    gradingDraft: any; // JSON!
    score: number; // Int!
  }
  Teacher: { // field return type
    _id: string | null; // ID
    email: string | null; // String
    firstName: string; // String!
    hasCourses: NexusGenRootTypes['Course'][]; // [Course!]!
    lastName: string; // String!
    password: string; // String!
    title: NexusGenEnums['TitleEnum']; // TitleEnum!
    userName: string; // String!
  }
  TeacherRegistrationPayload: { // field return type
    teacher: NexusGenRootTypes['Teacher']; // Teacher!
  }
  Test: { // field return type
    _id: string | null; // ID
    assignedDate: any; // Date!
    dueDate: any; // Date!
    exempt: boolean; // Boolean!
    hasAssigner: NexusGenRootTypes['Teacher']; // Teacher!
    hasOwner: NexusGenRootTypes['Student']; // Student!
    late: boolean; // Boolean!
    markingPeriod: string; // String!
    readings: NexusGenRootTypes['Readings']; // Readings!
    score: NexusGenRootTypes['Score']; // Score!
    testName: string; // String!
  }
  Topic: { // field return type
    question: string; // String!
    questionType: NexusGenEnums['QuestionTypeEnum']; // QuestionTypeEnum!
  }
  UpdateWorkingDraftPayload: { // field return type
    essay: NexusGenRootTypes['Essay']; // Essay!
  }
  WorkingDraft: { // field return type
    draft: any; // JSON!
  }
  Assignment: { // field return type
    _id: string | null; // ID
    assignedDate: any; // Date!
    dueDate: any; // Date!
    exempt: boolean; // Boolean!
    hasAssigner: NexusGenRootTypes['Teacher']; // Teacher!
    hasOwner: NexusGenRootTypes['Student']; // Student!
    late: boolean; // Boolean!
    markingPeriod: string; // String!
    readings: NexusGenRootTypes['Readings']; // Readings!
    score: NexusGenRootTypes['Score']; // Score!
  }
  User: { // field return type
    _id: string | null; // ID
    email: string | null; // String
    firstName: string; // String!
    lastName: string; // String!
    password: string; // String!
    userName: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addStudentsToCourse: { // args
      input: NexusGenInputs['AddStudentsToCourseInput']; // AddStudentsToCourseInput!
    }
    assignEssay: { // args
      input: NexusGenInputs['AssignEssayInput']; // AssignEssayInput!
    }
    createCourse: { // args
      input: NexusGenInputs['CreateCourseInput']; // CreateCourseInput!
    }
    login: { // args
      input: NexusGenInputs['LoginInput']; // LoginInput!
    }
    studentRegistration: { // args
      input: NexusGenInputs['StudentRegistrationInput']; // StudentRegistrationInput!
    }
    teacherRegistration: { // args
      input: NexusGenInputs['TeacherRegistrationInput']; // TeacherRegistrationInput!
    }
    updateWorkingDraft: { // args
      input: NexusGenInputs['UpdateWorkingDraftInput']; // UpdateWorkingDraftInput!
    }
  }
  Query: {
    findEssayById: { // args
      input: NexusGenInputs['FindEssayByIdInput']; // FindEssayByIdInput!
    }
    findEssaysByUserNameAndMarkingPeriod: { // args
      input: NexusGenInputs['FindEssaysByUserNameAndMarkingPeriodInput']; // FindEssaysByUserNameAndMarkingPeriodInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Assignment: "Essay" | "Reading_Guide" | "Test"
  User: "Student" | "Teacher"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AddStudentsToCoursePayload" | "AssignEssayPayload" | "Course" | "CreateCoursePayload" | "Essay" | "FinalDraftContainer" | "FindEssayByIdPayload" | "FindEssaysByUserNameAndMarkingPeriodPayload" | "LoginPayload" | "Mutation" | "Query" | "Reading_Guide" | "Readings" | "Score" | "Student" | "StudentRegistrationPayload" | "SubmittedFinalDraft" | "Teacher" | "TeacherRegistrationPayload" | "Test" | "Topic" | "UpdateWorkingDraftPayload" | "WorkingDraft";

export type NexusGenInputNames = "AddStudentsToCourseInput" | "AssignEssayInput" | "CreateCourseInput" | "FindEssayByIdInput" | "FindEssaysByUserNameAndMarkingPeriodInput" | "HasAssigner" | "HasOwnerInput" | "LoginInput" | "ReadingsInput" | "StudentRegistrationInput" | "SubmittedFinalDraftsInput" | "TeacherRegistrationInput" | "TopicInput" | "UpdateWorkingDraftInput";

export type NexusGenEnumNames = "MarkingPeriodEnum" | "QuestionTypeEnum" | "TitleEnum";

export type NexusGenInterfaceNames = "Assignment" | "User";

export type NexusGenScalarNames = "Boolean" | "Date" | "DateTime" | "Float" | "ID" | "Int" | "JSON" | "String" | "Time";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: t.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}