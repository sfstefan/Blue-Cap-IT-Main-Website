---
title: "Verkada May 2024 Product Update: AI Search, New Cameras, Smarter Access Control, and More"
description: "A comprehensive breakdown of Verkada's May 2024 product updates, covering new AI-powered camera search, FIPS-validated cameras, access control integrations, intercom improvements, sensor enhancements, and workplace features."
date: "2024-05-15"
author: "Blue Cap IT"
---

<a href="../verkada.html"><img src="/images/verkada-partner.png" alt="Verkada Gold Partner" style="max-height:50px;width:auto;margin-bottom:2rem;" /></a>

# Verkada May 2024 Product Update

Verkada's May 2024 release is packed with meaningful upgrades across every product line. From AI-powered video search to new hardware and deeper third-party integrations, here is everything you need to know.

## Cameras

### AI-Powered Search

Verkada has introduced **AI-powered search** in Command, enabling users to search for near-limitless attributes of people and vehicles across camera footage. This makes it faster and easier to locate specific individuals, vehicles, or events without manually scrubbing through hours of video.

### Selective Face Blur

A major addition for privacy compliance: **selective face blur** allows operators to blur the faces of individuals in archived footage. This is particularly useful when sharing video with third parties or responding to public records requests where bystander privacy must be protected.

### Shortcuts in History Player

**Live feed shortcuts** are now available directly within the history player, making it quicker to navigate between live and recorded views without leaving the playback interface.

### New FIPS-Validated Bullet Cameras

Verkada has released **four new FIPS-validated bullet camera models**: the CB52-E-F, CB52-TE-F, CB62-E-F, and CB62-TE-F. These cameras meet federal government cryptographic standards, making them suitable for deployments that require FIPS 140-2 compliance.

### Low-Latency Streaming with WebCodecs

A behind-the-scenes improvement with real impact: **WebCodecs technology reduces streaming latency by approximately 50%** between real-world events and what appears on screen in Command. This means faster response times for security teams monitoring live feeds.

### Unified POI and LPOI View

License plates linked to **persons of interest (POI)** are now visible from a single, unified screen. Security teams no longer need to switch between separate views to correlate vehicle and person data.

### MotionX Trajectory Enhancements

The MotionX feature receives a **refreshed UI and new filtering options**, including line crossing detection, loitering alerts, and crowding filters. These enhancements give operators more precise control over motion-based analytics.

### Granular Analytics Permissions

Administrators now have **more detailed control** over who can view, search, remove, or create persons of interest. This helps organizations enforce tighter data governance around sensitive analytics features.

### Alerts Page Improvements

Minor **UI and UX enhancements** along with bug fixes improve the overall experience on the alerts page.

## Command Platform

### Mobile Admin Settings (iOS and Android)

Organization administrators can now **manage admin settings directly from the Verkada mobile app** on both iOS and Android, reducing the need to access a desktop browser for routine management tasks.

### Invited User Tracking

**Org Admins can now track newly invited users** and see their status until they accept the invitation. This makes it easier to follow up on pending onboarding.

### Email Communication Preferences

Users can **configure their communication preferences** directly from Account Settings, giving them control over what notifications and updates they receive via email.

### Okta OIDC Single Sign-On

Verkada now supports **OpenID Connect (OIDC) single sign-on with Okta**, streamlining authentication for organizations that use Okta as their identity provider.

## Connectivity

### New Gateway Alerts

Gateway devices now support alerts for **tamper events, SIM failover events, and monthly data usage thresholds**. These alerts help IT teams stay ahead of connectivity issues before they impact operations.

## Access Control

### ASSA ABLOY Integration

Verkada now integrates with **WiFi and Power-over-Ethernet (PoE) locks from ASSA ABLOY**, specifically the Corbin Russwin and Sargent Aperio series. This expands the range of door hardware that works natively within the Verkada ecosystem.

### Schlage Context Cameras

Organizations can **associate context cameras with Schlage Control series locks**, providing visual verification alongside access events for a more complete picture of door activity.

### Tamper and Battery Alerts

Admins can **configure tamper and battery alerts** directly from Command, ensuring they are notified when wireless locks need attention or may have been physically interfered with.

### Door Unlock API

A new **Door Unlock API** allows organizations to query door status and unlock doors programmatically via API endpoints. This opens the door (literally) for custom integrations and automated workflows.

### Door Page Redesign

The door management page has received an **end-to-end overhaul**, improving how critical information is displayed and making it easier for operators to manage access points at a glance.

### Reader Connectivity Status

Verkada can now **detect connectivity and wiring issues** with access control readers, helping administrators troubleshoot hardware problems more quickly.

### Supervised Wiring

Administrators can **monitor wire connections from controllers to REX (request-to-exit) and AUX devices** directly within Command, adding another layer of system health visibility.

### Managed Sessions for Pass App

Organizations can now **control the total number of Pass app logins**, giving IT teams more oversight over mobile credential usage.

### CSV Upload Improvements

**Bulk profile creation via CSV upload** has been streamlined, making it faster to onboard large groups of users into the access control system.

## Intercom

### Global Events Tab

A new **Global Events tab** allows administrators to search, filter, and view intercom calls across all devices from a single location, rather than checking each intercom individually.

### TD52 License Plate Recognition Unlock

The TD52 intercom now supports **license plate recognition (LPR) unlock** capabilities when paired with a single-door controller. This enables automatic gate or door entry based on recognized license plates.

### Improved People Detection

Verkada has enhanced the intercom's ability to **detect individuals in vehicles**, reducing missed calls and improving the visitor experience at drive-up entry points.

### Enhanced Call Transcripts

Call transcription is now **more accurate and reliable**, making it easier to review intercom interactions after the fact.

### In-Call Performance Improvements

Three separate updates ensure **more consistent call performance across all receiver types**, improving audio and video quality during live intercom sessions.

## Sensors

### Precise Time Frame Search

The Sensor Event Analytics page now features **improved search functionality with precise time frames**, making it easier to locate specific environmental events such as temperature spikes or air quality changes.

### Static IP Configuration

Administrators can now **set static IP addresses on sensor devices**, which is useful in network environments that require fixed addressing for device management or firewall rules.

## Workplace (Guest Management)

### QR Code Check-In

Return visitors can now **expedite check-in using QR codes stored in Apple Wallet or Google Wallet**, reducing wait times at the front desk.

### Enhanced Guest Log Search

The guest log now supports **enhanced search with filtering by name, date, and guest type**, making it simpler to locate visitor records.

### Subsite Imports

Organizations can **import subsites as Guest sites**, simplifying multi-location guest management setup.

### Check-In Videos

Organizations can **add videos to the visitor check-in experience**, which can be used for safety briefings, welcome messages, or instructional content.

### Visitor Profile Notes

**Admins and receptionists can add notes to visitor profiles**, providing context for future visits or flagging important information.

### Improved Log Exports

**Enhanced exporting functionality** makes it easier to pull guest data for reporting or compliance purposes.

### Multi-Department Check-In

A single iPad can now support **check-in for multiple departments**, reducing the hardware needed at reception areas.

### Outpatient Visitor Flow

A **new workflow designed for outpatient visitors and hospital departments** streamlines the check-in process in healthcare environments.

### ID Scanning Guidance

A new **visual demonstration on the iPad** shows front-desk staff how to use front camera scanning gestures for ID verification.

### ClassLink Integration

Verkada Guest now integrates with **ClassLink**, a single sign-on provider widely used in K-12 schools, making it easier for education organizations to deploy visitor management.

### Volunteer Management

Organizations can **upload CSV files of pre-approved visitor lists**, simplifying volunteer management for events and recurring programs.

### SIS District Mapping

Support for **mapping multiple Guest sites to a single school district** within Student Information Systems (SIS), improving scalability for education deployments.

---

## Want to Learn More?

As an official **Verkada Gold Partner**, Blue Cap IT can help you take full advantage of every feature in this update — whether you're looking to deploy new cameras, upgrade your access control, or enhance your security infrastructure.

**Reach out to the Blue Cap IT Sales Team today** to discuss how these new capabilities can work for your organization:

- **Phone:** [(410) 858-4031](tel:4108584031)
- **Email:** [info@bluecapit.com](mailto:info@bluecapit.com)
- **Online:** [Contact Us](../contact.html)
- **Learn More:** [Explore All Verkada Products](../verkada.html)
