# React Router Dom: Catch-all Route Conflict

This repository demonstrates a common issue in React Router Dom v6 where a catch-all route (`/*`) interferes with nested routes.  The problem arises when the catch-all route is placed in a way that it intercepts routes intended for nested components.  The solution shows how to correctly structure routes to prevent this conflict.