---
title: "9 questions to ask before signing an MDR contract"
description: "An evaluation rubric we use with SMB clients before recommending a Managed Detection and Response provider. Built from the deployments and incident reviews we've actually done."
date: "2026-06-10"
author: "Scott Stefan"
---
Every SMB cyber insurance renewal in 2026 is asking some version of the same question:

> "Do you have 24/7 detection and response coverage on your endpoints and your M365 tenant?"

The right answer used to be "we have antivirus." Then it was "we have EDR." Now the right answer — for almost every business north of about 25 employees — is "we have MDR." Managed Detection and Response: the product category where a real human SOC (Security Operations Center) is watching your environment around the clock and is contractually responsible for responding to what they see.

The problem is that the MDR market is full of vendors all using the same words. Every one of them claims 24/7, real humans, advanced threat detection, blah blah. Most SMB buyers can't tell the difference between a legitimate MDR service and a glorified alerting platform with a chat queue.

This is the rubric we use with Blue Cap IT clients before we recommend or scope an MDR engagement. Nine questions, in roughly the order they should be asked.

## 1. Where is your SOC located, and what hours do they actually staff it?

The phrase "24/7" is technically true for almost every vendor — but it can mean "we have a chatbot at 3 a.m." or "we have a fully staffed analyst team at 3 a.m. who will pick up the phone." Ask specifically: where are the analysts, what country, what shifts, and what is the median time-to-respond in the middle of the night versus during business hours.

A good MDR vendor will quote you a specific number. A bad one will dodge into marketing language.

## 2. What is your average and worst-case time-to-first-response?

Average is a vanity number — vendors quote impressive averages because most alerts are nothing. The number that matters is the *median* response on a real, confirmed threat — and the *worst case* over the last 12 months. If they won't share it, that tells you something.

For context: the better SMB-focused MDR vendors are responding to confirmed threats in under 15 minutes around the clock. If a vendor quotes you "within 4 hours" as a normal SLA, that is not MDR — that is monitoring.

## 3. Do you cover M365 identity, not just endpoints?

This is the question most buyers don't know to ask, and it's the one that's caught us several times. A modern attack on an SMB rarely starts on an endpoint. It starts with a stolen M365 credential, an attacker creating an inbox forwarding rule, and then quietly reading your CFO's email for two weeks before they pivot.

Endpoint MDR — even very good endpoint MDR — does not see this. You need ITDR (Identity Threat Detection and Response) coverage on your M365 tenant. Some vendors include this; some sell it as a separate SKU; some don't offer it at all. Ask explicitly.

## 4. What does your handoff to my IT team look like when an incident hits?

When a real incident is in progress at 2 a.m., what happens? Do they call a phone number? Do they post in a Slack channel? Do they email an alias? Who do they call if the first contact doesn't pick up? What do they tell that person, and in what format?

The answer should be specific and rehearsed. If the vendor cannot describe a handoff playbook, they don't have one, and you'll find that out the hard way during your first incident.

## 5. Will you contain the threat, or just tell me about it?

There is a meaningful difference between "we'll alert you to malware on Endpoint X" and "we'll isolate Endpoint X from the network, kill the process, and call you." Some MDR vendors are observe-and-report. Others have authorization to take action.

For an SMB without 24/7 internal IT staff, the second one is what you need. If the vendor is observe-and-report only, they are essentially shifting the night-shift response work back to you.

## 6. What does a real incident report look like? Show me one (sanitized).

Every MDR vendor will say their reporting is excellent. Make them prove it. Ask for a sanitized incident report from a real engagement. Read it. If it's two paragraphs of jargon and no narrative, that's what your team will get when something goes wrong. If it's a clear story — what happened, when, what was done, what the customer should do next — you have your answer.

The sample report also tells you whether the vendor's analysts can write. They will be the people communicating with you under stress. This matters more than people think.

## 7. What's the contract length, and what are the exit terms?

Some MDR vendors lock you into 36-month contracts with stiff exit penalties. Others bill month-to-month. There is no objectively correct answer here, but you should know what you're signing.

What we look for: an annual commitment with a documented offboarding process and the ability to export your historical alert and incident data on the way out. If they can't tell you how data export works, assume there's a reason.

## 8. How do you price, and what triggers a price increase?

MDR is typically priced per protected asset — per endpoint, per M365 user, per server. Some vendors include a number of "investigations" or "incident hours" and charge for overage. Some don't. Some price by environment size tiers that step up at thresholds you might not notice until the bill arrives.

Ask for a sample bill at your current size and a sample bill at 1.5x your current size. The math should be linear and predictable.

## 9. Who are three SMB clients I can call?

If a vendor cannot produce three reference customers in roughly your size and industry, they are not the right fit for an SMB engagement. The reference call is where you find out what the relationship is actually like — how often the vendor proactively reaches out, how the renewal conversation went, whether anyone has actually had an incident and how it was handled.

Real references take 20 minutes each and tell you more than any sales call.

## A note on what we recommend

Blue Cap IT's default MDR recommendation for SMBs in our footprint is Huntress, primarily because their offering passes all nine of these questions cleanly and their pricing model fits the SMB shape. We've also deployed and supported other platforms where a client's specific situation called for something different — there is no single right answer for every business.

The point of the rubric isn't to push you toward a specific vendor. It's to make sure you don't sign a contract for something that calls itself MDR but won't actually defend you when it matters.

## Talk to Blue Cap IT about MDR

If you're evaluating MDR for an SMB in MD, DC, VA, DE, PA, or NC and want help running a vendor through these nine questions — or you'd like our take on what coverage your cyber insurance policy is actually requiring — [reach out](https://bluecapit.com/contact?utm_source=blog&utm_medium=organic&utm_campaign=9-questions-mdr). A 20-minute conversation usually clarifies the path.
