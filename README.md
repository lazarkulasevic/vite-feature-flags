# Feature Flags made simple with Vite + React

Probably the fastest way to add feature flags to your Vite project.

Features configuration for all environments is located in `env.json` and it looks like this:

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

## Result: DEV & PROD

![image](https://github.com/lazarkulasevic/vite-feature-flags/assets/68285821/04934d6c-25b1-4517-915f-c283174cfae3)
