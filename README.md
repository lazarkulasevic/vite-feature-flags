# Feature Flags made simple with Vite + React

Probably the fastest way to add feature flags to your Vite project.

Environment configs are located in `env.json` and it looks like this.

```json
{
  "development": {
    "features": {
      "counter": {
        "enabled": true
      },
      "react_logo": {
        "enabled": true
      }
    }
  },
  "production": {
    "features": {
      "counter": {
        "enabled": false
      },
      "react_logo": {
        "enabled": true
      }
    }
  }
}
```
