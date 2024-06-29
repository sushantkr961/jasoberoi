"use client";
import Widget from "@/components/Admin/Widget";
import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <section className="grid  sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <Widget
        title="Blogs"
        count={0}
        description="Add Blog, edit and delete more."
        icon={'/admin/blog.png'}
        href="/admin/blogs"
      />


      <Widget
        title="Propertys"
        count={0}
        description="Add Propertys, edit and delete more."
        icon={'/admin/house.png'}
        href="/admin/property"
      />

      <Widget
        title="Sold Stories"
        count={0}
        description="Add Sold Stories, edit and more."
        href="/admin/sold-stories"
        icon={'/admin/sold.png'}
      />

      <Widget
        title="Comments"
        count={0}
        description="Comments"
        icon={'/admin/comments.png'}
        href="/admin/commentlist"
      />

      <Widget
        title="Users"
        count={0}
        description="Add Users, edit and delete more."
        icon={'/admin/user.png'}
        href="/admin/users"
      />

    </section>
  );
};

export default AdminDashboard;
