import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Teachers/Staff Table
export const teachers = pgTable("teachers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  position: text("position").notNull(),
  subject: text("subject"),
  photo: text("photo"),
});

export const insertTeacherSchema = createInsertSchema(teachers).omit({
  id: true,
});

export type InsertTeacher = z.infer<typeof insertTeacherSchema>;
export type Teacher = typeof teachers.$inferSelect;

// OSIS Members Table
export const osisMembers = pgTable("osis_members", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  position: text("position").notNull(),
  photo: text("photo"),
});

export const insertOSISMemberSchema = createInsertSchema(osisMembers).omit({
  id: true,
});

export type InsertOSISMember = z.infer<typeof insertOSISMemberSchema>;
export type OSISMember = typeof osisMembers.$inferSelect;

// News/Announcements Table
export const news = pgTable("news", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull().$type<"Akademik" | "Kegiatan" | "OSIS" | "Umum">(),
  thumbnail: text("thumbnail"),
  date: text("date").notNull(),
});

export const insertNewsSchema = createInsertSchema(news).omit({
  id: true,
});

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;

// Achievements Table
export const achievements = pgTable("achievements", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  year: text("year").notNull(),
  eventName: text("event_name").notNull(),
  level: text("level").notNull(),
  result: text("result").notNull(),
});

export const insertAchievementSchema = createInsertSchema(achievements).omit({
  id: true,
});

export type InsertAchievement = z.infer<typeof insertAchievementSchema>;
export type Achievement = typeof achievements.$inferSelect;

// Activities Table (for OSIS/Extracurricular)
export const activities = pgTable("activities", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull().$type<"OSIS" | "Pramuka" | "Paskibra" | "Seni" | "Olahraga">(),
  description: text("description").notNull(),
  photo: text("photo"),
});

export const insertActivitySchema = createInsertSchema(activities).omit({
  id: true,
});

export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type Activity = typeof activities.$inferSelect;
