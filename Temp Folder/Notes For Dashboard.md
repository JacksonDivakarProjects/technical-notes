To fix the error, replace `DefaultAzureCredential` with `InteractiveBrowserCredential` for browser-based environments. [1, 2]

## Updated Code

```typescript
import { SecretClient } from "@azure/keyvault-secrets";
import { InteractiveBrowserCredential } from "@azure/identity";

// 1. Browser-compatible credential requires an App Registration Client ID
const credential = new InteractiveBrowserCredential({
  clientId: "YOUR_CLIENT_ID", // Found in Azure Portal > App Registrations
  tenantId: "YOUR_TENANT_ID", // Optional, defaults to home tenant
  redirectUri: window.location.origin // Ensure this matches your App Registration
});

const keyVaultName = "your-key-vault-name";
const url = `https://${keyVaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

// ... existing cache and getSecretValue logic remains the same
```

## Key Differences

- Environment Support: `DefaultAzureCredential` is designed for server-side environments (Node.js, VMs, Managed Identity).
- Authentication Flow: `InteractiveBrowserCredential` uses the [Microsoft Authentication Library (MSAL.js)](https://learn.microsoft.com/en-us/javascript/api/overview/azure/identity-readme?view=azure-node-latest) to open a popup or redirect for user login in the browser.
- Configuration: You must provide a `clientId` from an Azure App Registration that has the "Allow public client flows" setting enabled and a valid Redirect URI. [1, 2, 3, 4, 5]

Note on Security: Fetching secrets directly in the browser exposes them to the client-side. For production, it is often more secure to use a backend API that retrieves secrets via `DefaultAzureCredential` and serves only necessary data to the frontend. [6, 7]

Would you like help setting up the Azure App Registration or the CORS settings required for browser access?

  

[1] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/javascript/api/overview/azure/identity-readme?view=azure-node-latest)

[2] [https://github.com](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md)

[3] [https://github.com](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/interactive-browser-credential.md)

[4] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-node)

[5] [https://stackoverflow.com](https://stackoverflow.com/questions/79277889/azure-identity-how-to-authenticate-from-the-browser-popup-or-redirect-mode-wh)

[6] [https://dev.to](https://dev.to/azure/using-azure-key-vault-to-manage-your-secrets-546g)

[7] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/javascript/api/preview-docs/overview/azure/key-vault/keyvault-secrets-readme?view=az-js-keyvault-v4)




You can find all these identifiers by logging into the Azure Portal. [1, 2]

## 1. Get Client ID and Tenant ID [1]

These are located within your App Registration:

- Search: In the top search bar, type "App registrations" and select it.
- Create or Select: Click on "New registration" (if you don't have one yet) or select your existing application from the list.
- Copy IDs: On the Overview page of your app, you will find:
    
    - Application (client) ID: Use this for `clientId`.
    - Directory (tenant) ID: Use this for `tenantId`. [1, 3, 4, 5]
    

## 2. Configure for Browser Access (SPA) [4]

Because you are using `InteractiveBrowserCredential`, you must configure the app registration as a Single Page Application (SPA): [6, 7]

- In your App Registration, go to Manage > Authentication.
- Click Add a platform and select Single-page application.
- Enter your Redirect URI (e.g., `http://localhost:3000` for local testing). [4, 7, 8]

## 3. Get Key Vault Name [9]

- Search: In the top search bar, type "Key vaults" and select it.
- Find Name: Locate your vault in the list. The Name column is the `keyVaultName` you need.
- Vault URI: If you click on the vault, the Vault URI (e.g., `https://your-vault.vault.azure.net/`) is also displayed on the Overview page. [9, 10, 11, 12, 13]

## 4. Required Permission (IAM)

Even with the correct IDs, your code will fail unless your logged-in user has permission to read secrets:

- Go to your Key Vault in the portal.
- Select Access control (IAM) > Add role assignment.
- Assign the "Key Vault Secrets User" role to your own account. [11, 14]

Do you need help setting up CORS on the Key Vault so your browser app can talk to it directly?

  

[1] [https://matomo.org](https://matomo.org/faq/reports/how-to-get-microsoft-teams-client-id-client-secret-tenant-id-and-teams-id/)

[2] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id)

[3] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/answers/questions/1573520/how-to-find-client-id)

[4] [https://docs.apisec.ai](https://docs.apisec.ai/OAuth2.0PC/)

[5] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/answers/questions/1742223/how-can-i-get-my-tenant-id-client-id-and-client-se)

[6] [https://www.youtube.com](https://www.youtube.com/watch?v=ffCCpwzJMnQ&t=52)

[7] [https://github.com](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/interactive-browser-credential.md)

[8] [https://stackoverflow.com](https://stackoverflow.com/questions/78880218/ms-graph-interactivebrowsercredential-is-a-client-id-registered-in-azure-porta)

[9] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/azure/key-vault/general/quick-create-portal)

[10] [https://learn.microsoft.com](https://learn.microsoft.com/en-us/azure/key-vault/general/about-keys-secrets-certificates)

[11] [https://www.youtube.com](https://www.youtube.com/watch?v=A8dJL43zDYA&t=4)

[12] [https://experienceleague.adobe.com](https://experienceleague.adobe.com/en/docs/experience-platform/landing/governance-privacy-security/customer-managed-keys/azure/azure-key-vault-config)

[13] [https://www.youtube.com](https://www.youtube.com/watch?v=RT-Q-SFW-T8&t=12)

[14] [https://hatfullofdata.blog](https://hatfullofdata.blog/create-azure-key-vault-to-store-id-and-secret/)